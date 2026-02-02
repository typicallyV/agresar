import styles from './five.module.scss'
import { content } from '../../../../constants/content'
import Image from 'next/image'

const Index = () => {
  return (
    <>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <h3>{content?.about?.five?.h3}</h3>
          <p>{content?.about?.five?.p}</p>
          <div className={styles['cards']}>
            {content?.about?.five?.cards?.map((card, index) => (
              <div key={index} className={styles['card']}>
                <Image
                  src={card?.img?.src}
                  alt={card?.img?.alt}
                  height={card?.img?.height}
                  width={card?.img?.width}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
