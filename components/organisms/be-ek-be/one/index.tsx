import styles from './one.module.scss'
import { content } from '../../../../constants/content'
import Image from 'next/image'

const Index = () => {
  return (
    <>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <div className={styles['left']}>
            <h2>{content?.['be-ek-be']?.one?.left?.h2}</h2>
            <p>{content?.['be-ek-be']?.one?.left?.p}</p>
          </div>
          <div className={styles['right']}>
            <Image
              src={content?.['be-ek-be']?.one?.right?.img?.src}
              alt={content?.['be-ek-be']?.one?.right?.img?.alt}
              width={content?.['be-ek-be']?.one?.right?.img?.width}
              height={content?.['be-ek-be']?.one?.right?.img?.height}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
