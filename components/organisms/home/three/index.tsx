import { useEffect, useRef, useState } from 'react'
import { content } from '../../../../constants/content'
import styles from './three.module.scss'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'

const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  // ...existing code...
useEffect(() => {
  const currentTarget = targetRef.current;  // Capture the ref value to avoid stale closures in cleanup

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // The target element is currently visible on the screen
        // Perform your desired action here
        setIsIntersecting(entry.isIntersecting);
      }
    },
    { threshold: 0.1 } // Adjust the threshold as needed
  );

  if (currentTarget) {
    observer.observe(currentTarget);
  }

  return () => {
    if (currentTarget) {
      observer.unobserve(currentTarget);
    }
  };
}, []);
// ...existing code...
  return (
    <>
      <section className={styles?.['outer-wrapper']}>
        <div className={styles?.['inner-wrapper']}>
          <h2>{content?.home?.three?.h2}</h2>
          <div ref={targetRef} className={styles?.['cards']}>
            {content?.home?.three?.cards?.map?.((item, index) => (
              <div key={index} className={styles?.['card']}>
                <Image
                  className={styles?.['icon']}
                  src={item?.icon?.src}
                  alt={item?.icon?.alt}
                  width={item?.icon?.width}
                  height={item?.icon?.height}
                />
                <h1>
                  <Incrementer number={item?.h1} />
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item?.p?.dangerouslySetInnerHTML,
                  }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Incrementer({ number }: { number: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < number) {
        setCount((count) =>
          count < 1000
            ? count + 10
            : number < 100000
            ? count + 100
            : count + 1000
        )
      } else {
        clearInterval(timer)
      }
    }, 10)

    return () => clearInterval(timer)
  }, [number, count])

  const formatNumber = (num: number) => {
    if (num < 1000) return num
    else if (num < 100000) return (num / 1000).toFixed(0) + 'K'
    else if (num < 10000000) return (num / 1000000).toFixed(0) + 'L'
    else if (num < 1000000000) return (num / 10000000).toFixed(0) + 'Cr'
  }

  return (
    <>
      {count >= number ? formatNumber(count) : count}
      {count >= number && count != 0 ? '+' : ''}
    </>
  )
}

export default Index
