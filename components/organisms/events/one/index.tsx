import styles from './one.module.scss'
import { content } from '../../../../constants/content'
import Image from 'next/image'

const Index = () => {
  return (
    <>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <div className={styles['left']}>
            <h2
              dangerouslySetInnerHTML={{
                __html: content.events.one.left.h2.dangerouslySetInnerHTML,
              }}
            ></h2>
            <p
              dangerouslySetInnerHTML={{
                __html: content.events.one.left.p.dangerouslySetInnerHTML,
              }}
            ></p>
          </div>
          <div className={`${styles['right']} d-none d-lg-block`}>
            <Image
              src={content.events.one.right.img.src}
              alt={content.events.one.right.img.alt}
              width={content.events.one.right.img.width}
              height={content.events.one.right.img.height}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
