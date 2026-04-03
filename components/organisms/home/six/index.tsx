import styles from './six.module.scss'
import Image from 'next/image'

const images1: string[] = [
  '/assets/home/six/item-1.png',
  '/assets/home/six/item-2.jpg',
  '/assets/home/six/item-3.jpg',
  '/assets/home/six/item-4.jpg',
  '/assets/home/six/item-8.jpg',
]

const images2: string[] = [
  '/assets/home/six/item-5.jpg',
  '/assets/home/six/item-6.jpg',
  '/assets/home/six/item-7.jpg',
  '/assets/home/six/item-1.png',
  '/assets/home/six/item-9.jpg',
]

interface TrackProps {
  images: string[]
  reverse?: boolean
}

const Track = ({ images, reverse = false }: TrackProps) => {
  const doubled = [...images, ...images]
  return (
    <div className={`${styles.track} ${reverse ? styles.reverse : ''}`}>
      {doubled.map((src, i) => (
        <div key={i} className={styles.card}>
          <div
            className={styles.cardBg}
            style={{ backgroundImage: `url(${src})` }}
          />
          <div className={styles.overlay} />
          <div className={styles.profile}>
            <Image
              src="/assets/home/six/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const Index = () => (
  <section className={styles['outer-wrapper']}>
    <div className={styles['track-wrapper']}>
      <Track images={images1} />
      <Track images={images2} reverse />
    </div>
  </section>
)

export default Index