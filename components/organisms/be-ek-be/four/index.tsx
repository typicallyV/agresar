'use client'
import styles from './four.module.scss'
import Image from 'next/image'

const photos: string[] = [
  '/assets/home/six/bkb-2.jpg',
  '/assets/home/six/bkb-3.JPG',
  '/assets/home/six/bkb-4.JPG',
  '/assets/home/six/bkb-5.jpg',
  '/assets/home/six/bkb-6.jpg',
  '/assets/home/six/bkb-7.jpg',
]

interface TrackProps {
  images: string[]
  reverse?: boolean
}

const Track = ({ images, reverse = false }: TrackProps) => {
  const tripled = [...images, ...images, ...images]
  return (
    <div className={`${styles.track} ${reverse ? styles.reverse : ''}`}>
      {tripled.map((src, i) => (
        <div key={i} className={styles.card}>
          <img src={src} alt="" className={styles.cardImg} />
          <div className={styles.overlay} />
          <div className={styles.logoBadge}>
            <Image src="/assets/home/six/logo.svg" alt="logo" width={24} height={24} />
          </div>
        </div>
      ))}
    </div>
  )
}

const Index = () => {
  return (
    <section className={styles.outerWrapper}>
      <div className={styles.trackWrapper}>
        <Track images={photos} />
        <Track images={[...photos].reverse()} reverse />
      </div>
    </section>
  )
}

export default Index