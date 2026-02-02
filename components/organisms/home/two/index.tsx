import styles from './two.module.scss'
import Image from 'next/image'
import { content } from '../../../../constants/content'
import { useRouter } from 'next/router'
const Index = () => {
  const { push } = useRouter()
  return (
    <section className={styles['outer-wrapper']}>
      <div className={styles['inner-wrapper']}>
        <div className={styles['left']}>
          <Image
            className='img-fluid'
            src={content.home.two.left.img.src}
            alt={content.home.two.left.img.alt}
            height={content.home.two.left.img.height}
            width={content.home.two.left.img.width}
          />
        </div>
        <div className={styles['right']}>
          <h2>{content.home.two.right.h2}</h2>
          <h3>{content.home.two.right.h3}</h3>
          <p>{content.home.two.right.p}</p>
          <div
            className={styles['hyper-link-wrapper']}
            onClick={() => {
              push(content.home.two.hyperlink.href)
            }}
          >
            <div className={styles['text']}>
              {content?.home?.two?.hyperlink?.text}
            </div>
            <Image
              src={content?.home?.two?.hyperlink?.img?.src}
              alt={content?.home?.two?.hyperlink?.img?.alt}
              height={content?.home?.two?.hyperlink?.img?.height}
              width={content?.home?.two?.hyperlink?.img?.width}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
