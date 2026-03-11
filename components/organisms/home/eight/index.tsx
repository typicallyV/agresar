import styles from './eight.module.scss'
import { content } from '../../../../constants/content'
import Card from '../../../atoms/card'
import Image from 'next/image'
import { useRef } from 'react'
import VideoPlayer from './VideoPlayer'
import { Container } from 'react-bootstrap'

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    const scrollAmount = 400

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <Container>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>

          <h2>{content?.home?.eight?.h2}</h2>

          <h6 className={styles['sub-heading']}>
            {content?.home?.eight?.h4}
          </h6>

          <VideoPlayer />

          <div className={styles['content']}>

            <div className={styles['slider']}>
  <div className={styles['track']}>
    {[...content?.home?.eight?.cards, ...content?.home?.eight?.cards].map(
      (item: any, index: number) => (
        <Card key={index}>
          <div className={styles['card-inner']}>

            <p className={styles['review']}>
              {item?.review}
            </p>

            <div className={styles['profile']}>
              <Image
                className={styles['dp']}
                src={item?.profile?.image?.src}
                alt={item?.profile?.image?.alt}
                width={56}
                height={56}
              />
              <p className={styles['name']}>
                {item?.profile?.name}
              </p>
            </div>

          </div>
        </Card>
      )
    )}
  </div>
</div>

             

          </div>
        </div>
      </section>
    </Container>
  )
}

export default Index