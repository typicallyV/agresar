import styles from './two.module.scss'
import { content } from '../../../../constants/content'
import Image from 'next/image'

import animationData from '../../../../public/69270.json'
import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
})

const Index = () => {
  return (
    <>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <h2>{content?.['be-ek-be']?.two?.h2}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: content?.['be-ek-be']?.two?.p,
            }}
          ></p>

          <Image
            src={content?.['be-ek-be']?.two?.img?.src}
            alt={content?.['be-ek-be']?.two?.img?.alt}
            width={content?.['be-ek-be']?.two?.img?.width}
            height={content?.['be-ek-be']?.two?.img?.height}
          />
        </div>

        {/* Lottie + overlaid logo cards */}
        <div className={styles['lottie-section']}>
          <div className={styles['lottie-wrapper']}>
            <Lottie animationData={animationData} loop={true} />
          </div>

          {/* Left logo — sits inside left loop */}
          <div className={`${styles['logo-card']} ${styles['logo-left']}`}>
            <img src=" assets\home\seven\eSthree.png" alt="eStree - Empowering Women" />
          </div>

          {/* Right logo — sits inside right loop */}
          <div className={`${styles['logo-card']} ${styles['logo-right']}`}>
            <img src="assets\home\seven\nFirst.png" alt="Nation First" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Index