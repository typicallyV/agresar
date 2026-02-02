import styles from './three.module.scss'
import { content } from '../../../../constants/content'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from 'react-bootstrap'

const Index = () => {
  const [selected, setSelected] = useState(0)
  return (
    <Container>
      <Row>
        <section className={styles['outer-wrapper']}>
          <div className={styles['inner-wrapper']}>
            <h2>{content?.about?.three?.h2}</h2>
            <div className={styles['content']}>
                <div className={styles['years']}>
                  {content?.about?.three?.journey?.map((year, index) => (
                    <div
                      key={index}
                      className={styles['year']}
                      onClick={() => {
                        setSelected(index)
                      }}
                    >
                      <div
                        style={{ background: selected == index ? '' : '#fff' }}
                      ></div>
                      <h3
                        className={
                          index == selected
                            ? styles['selected']
                            : styles['unselected']
                        }
                      >
                        {year?.year}
                      </h3>
                    </div>
                  ))}
                </div>
                <div className={styles['data']}>
                  <div className={styles['big-text']}>
                    {content?.about?.three?.journey[selected]?.year}
                  </div>
                  <div className={styles['small-text']}>
                    {content?.about?.three?.journey[selected]?.content}
                  </div>
                </div>
            </div>
          </div>
        </section>
      </Row>
    </Container>
  )
}

export default Index
