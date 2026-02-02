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
        { <div style={{width: 1000, height: 700, display: 'flex', alignItems: 'center', margin: 'auto'}}>
          <div style={{ width: '100%', height: '50%' }}>
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div> }
      </section>
    </>
  )
}

export default Index
