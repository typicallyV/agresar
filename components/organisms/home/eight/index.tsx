import styles from './eight.module.scss'
import { content } from '../../../../constants/content'
import Card from '../../../atoms/card'
import Image from 'next/image'
import { useRef } from 'react'
import VideoPlayer from './VideoPlayer'
import { Container } from 'react-bootstrap'

const Index = () => {
  const scrollRef = useRef(null)
  const handleClick = (item: any) => {}

  return (
    <>
    <Container>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <h2>{content?.home?.eight?.h2}</h2>
          <i><h6 style={{display: 'flex', justifyContent: 'center', width: '60%', alignItems: 'center', textAlign: 'center', margin: 'auto', fontWeight: 'bold'}}>{content?.home.eight?.h4}</h6></i>
          <VideoPlayer/>
          <div className={styles['content']}>
            <div className={styles['items']} ref={scrollRef}>
              {content?.home?.eight?.cards?.map((item, index) => (
                <Card
                  key={index}
                  customStyles={{
                    width: '460px',
                    height: '460px',
                    borderRadius: '22px',
                    minWidth: '460px',
                  }}
                >
                  <div className={styles['item']}>
                    <p className={styles['review']}>{item?.review}</p>
                    <div className={styles['profile']}>
                      <Image
                        className={styles['dp']}
                        src={item?.profile?.image?.src}
                        alt={item?.profile?.image?.alt}
                        width={56}
                        height={56}
                      ></Image>
                      <p className={styles['name']}>{item?.profile?.name}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Image
              src="/assets/home/eight/leftArrow.svg"
              alt="left"
              className={styles['left-arrow']}
              width={35}
              height={35}
              onClick={() => {
                // @ts-ignore
                scrollRef.current.scrollLeft -= 150
              }}
            />
            <Image
              src="/assets/home/eight/rightArrow.svg"
              alt="left"
              className={styles['right-arrow']}
              width={35}
              height={35}
              onClick={() => {
                // @ts-ignore
                scrollRef.current.scrollLeft += 150
              }}
            />
          </div>
        </div>
      </section>
      </Container>
    </>
  )
}

export default Index
