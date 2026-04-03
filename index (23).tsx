import styles from './two.module.scss'
import { content } from '../../../../constants/content'
import Image from 'next/image'
import Card from '../../../atoms/card'
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from 'react-bootstrap'


const Index = () => {
  return (
    <Container>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <h2>{content?.about?.two?.section1?.h2}</h2>
          <p>{content?.about?.two?.section1?.p}</p>
        </div>
      </section>
      <section className={styles['outer-wrapper-2']}>
        <div className={styles['inner-wrapper']}>
          <Image
            className={styles['banner']}
            src={content?.about?.two?.section2?.img?.src}
            alt={content?.about?.two?.section2?.img?.alt}
            width={content?.about?.two?.section2?.img?.width}
            height={content?.about?.two?.section2?.img?.height}
          />
          <Row>
          <div className={styles['content']}>
            <Col xs={12} md={6} lg={4}>
            <div className={styles['left']}>
              <h2>{content?.about?.two?.section2?.h2}</h2>
              <p>{content?.about?.two?.section2?.p}</p>
            </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <div className={styles['right']}>
              {content?.about?.two?.section2?.cards?.map((item, index) => {
                return (
                  <div key={index} className={styles['card-wrapper']}>
                    <Image
                      src={item?.img?.src}
                      alt={item?.img?.alt}
                      width={item?.img?.width}
                      height={item?.img?.height}
                    />
                    <h3>{item?.h3}</h3>
                  </div>
                )
              })}
            </div>
            </Col>
          </div>
          </Row>
        </div>
      </section>
    </Container>
  )
}

export default Index
