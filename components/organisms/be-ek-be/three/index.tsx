import { useEffect, useRef, useState } from 'react'
import { content } from '../../../../constants/content'
import styles from './three.module.scss'
import Image from 'next/image'

const VIDEO_URL = '/assets/be-ek-be/three/bkb-1.mp4'

const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isYouTube = VIDEO_URL.includes('youtube.com') || VIDEO_URL.includes('youtu.be')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsIntersecting(true) },
      { threshold: 0.1 }
    )
    const currentTarget = targetRef.current
    if (currentTarget) observer.observe(currentTarget)
    return () => { if (currentTarget) observer.unobserve(currentTarget) }
  }, [])

  const handlePlay = () => {
    setIsPlaying(true)
    if (!isYouTube && videoRef.current) videoRef.current.play()
  }

  // Video finished → back to thumbnail
  const handleEnded = () => setIsPlaying(false)

  // User hits pause → back to thumbnail
  const handlePause = () => {
    if (videoRef.current && !videoRef.current.ended) setIsPlaying(false)
  }

  return (
    <section className={styles?.['outer-wrapper']}>
      <div className={styles?.['inner-wrapper']}>
        <h2>{content?.['be-ek-be']?.three?.h2}</h2>

        <div ref={targetRef} className={styles?.['cards']}>
          {content?.['be-ek-be']?.three?.cards?.map?.((item, index) => (
            <div key={index} className={styles?.['card']}>
              <Image
                className={styles?.['icon']}
                src={item?.icon?.src}
                alt={item?.icon?.alt}
                width={item?.icon?.width}
                height={item?.icon?.height}
              />
              <h1>
                <Incrementer number={item?.h1} isIntersecting={isIntersecting} />
              </h1>
              <p dangerouslySetInnerHTML={{ __html: item?.p?.dangerouslySetInnerHTML }} />
            </div>
          ))}
        </div>

        <p dangerouslySetInnerHTML={{ __html: content?.['be-ek-be']?.three?.p }} />

        {/* Video / Banner block */}
        <div className={styles['video-wrapper']}>
          {!isPlaying ? (
            <div className={styles['thumbnail']} onClick={handlePlay}>
              <Image
                src={content?.['be-ek-be']?.three?.img?.src}
                alt={content?.['be-ek-be']?.three?.img?.alt ?? 'Video thumbnail'}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <button className={styles['play-btn']} aria-label="Play video">
                <span className={styles['play-circle']}>
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                    <path d="M21 13L1 1v24L21 13Z" fill="white" />
                  </svg>
                </span>
              </button>
            </div>
          ) : isYouTube ? (
            <iframe
              className={styles['video-frame']}
              src={`${VIDEO_URL}?autoplay=1`}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              className={styles['video-frame']}
              controls
              autoPlay
              playsInline
              onEnded={handleEnded}
              onPause={handlePause}
            >
              <source src={VIDEO_URL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </section>
  )
}

function Incrementer({ number, isIntersecting }: { number: number; isIntersecting: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isIntersecting) return
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= number) { clearInterval(timer); return number }
        return prev < 1000 ? prev + 10 : number < 100000 ? prev + 100 : prev + 1000
      })
    }, 10)
    return () => clearInterval(timer)
  }, [number, isIntersecting])

  const formatNumber = (num: number) => {
    if (num < 1000) return num
    if (num < 100000) return (num / 1000).toFixed(0) + 'K'
    if (num < 10000000) return (num / 1000000).toFixed(0) + 'L'
    return (num / 10000000).toFixed(0) + 'Cr'
  }

  return <>{count >= number && count !== 0 ? `${formatNumber(count)}+` : count}</>
}

export default Index