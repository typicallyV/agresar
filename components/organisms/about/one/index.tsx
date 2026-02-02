import styles from './one.module.scss'
import { content } from '../../../../constants/content'
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from 'react-bootstrap'

const Index = () => {
  return (
          <section className={styles['outer-wrapper']}>
            <div className={styles['inner-wrapper']}>
                <div className={styles['left']}>
                  <h2
  dangerouslySetInnerHTML={{
    __html: content?.home?.one?.left?.h2?.dangerouslySetInnerHTML || '',
  }}
></h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content.about.one.left.p.dangerouslySetInnerHTML,
                    }}
                  ></p>
                </div>
                <div className={styles['right']}>
                  <Image
                    className='img-fluid'
                    src={content.about.one.right.img.src}
                    alt={content.about.one.right.img.alt}
                    width={content.about.one.right.img.width}
                    height={content.about.one.right.img.height}
                  />
                </div>
            </div>
          </section>
  )
}

export default Index
