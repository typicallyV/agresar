// @ts-nocheck
import styles from './four.module.scss'
import { content } from '../../../../constants/content'
import Image from 'next/image'
import Button from '../../../atoms/button'
import { useRouter } from 'next/router'
import beEkBe from '../../../../public/assets/lottie/beEkBe.json'
 
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
})

const Index = () => {
  const { push } = useRouter()

  const handleClick = () => {
    push('be-ek-be')
  }
  return (
    <>
      <section className={`${styles['outer-wrapper']}`}>
        <div className={styles['inner-wrapper']}>
          <div className={styles['content']}>
            <h2>{content?.home?.four?.h2}</h2>
            <p>{content?.home?.four?.p}</p>
            <Button
              text={content?.home?.four?.button?.text}
              type={content?.home?.four?.button?.text}
              onClick={handleClick}
            />
            <div className={styles['lottie']}>
              <Lottie
                animationData={beEkBe}
                loop={true}
                autoplay={true}
                onAnimationEnd={() => {}}
              />
            </div>
          </div>
          <Image
            src={content?.home?.four?.logo?.src}
            alt={content?.home?.four?.logo?.alt}
            width={content?.home?.four?.logo?.width}
            height={content?.home?.four?.logo?.height}
          />
        </div>
      </section>
      {/* <Container className='d-lock d-lg-none d-flex align-items-center justify-content-center sm'>
      <section className={`${styles['outer-wrapper']}`}>
        <div className={styles['inner-wrapper']}>
          <div className={styles['content']}>
            <h2>{content?.home?.four?.h2}</h2>
            <p>{content?.home?.four?.p}</p>
            <Button
              text={content?.home?.four?.button?.text}
              type={content?.home?.four?.button?.text}
              onClick={handleClick}
            />
            <div className={styles['lottie']}>
              <Lottie
                animationData={beEkBe}
                loop={true}
                autoplay={true}
                onAnimationEnd={() => {}}
              />
            </div>
          </div>
          <Image
            src={content?.home?.four?.logo?.src}
            alt={content?.home?.four?.logo?.alt}
            width={content?.home?.four?.logo?.width}
            height={content?.home?.four?.logo?.height}
          />
        </div>
      </section>
      </Container> */}
    </>
  )
}

export default Index
