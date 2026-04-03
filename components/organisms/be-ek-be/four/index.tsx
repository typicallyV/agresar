'use client'
import styles from './four.module.scss'
import Image from 'next/image'
import { useRef, useState } from 'react'

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
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section className={styles.outerWrapper}>
      {/* Video */}
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src="/assets/home/six/bkb-1.mp4"
          className={styles.video}
          playsInline
          preload="metadata"
          onEnded={() => setPlaying(false)}
        />
        <button
          className={`${styles.playBtn} ${playing ? styles.playing : ''}`}
          onClick={togglePlay}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          <div className={styles.playBtnCircle}>
            {playing ? (
              <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
                <rect x="5" y="4" width="4" height="16" rx="1" />
                <rect x="15" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
                <path d="M7 4l13 8-13 8V4z" />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Sliding rows */}
      <div className={styles.trackWrapper}>
        <Track images={photos} />
        <Track images={[...photos].reverse()} reverse />
      </div>
    </section>
  )
}

export default Index