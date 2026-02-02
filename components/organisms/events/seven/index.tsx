import Image from 'next/image'
import styles from './seven.module.scss'
import { content } from '../../../../constants/content'
import Button from '../../../atoms/button'
import VolunteerModal from '../../../organisms/volunteerModal'
import { useState } from 'react'
import animationData from '../../../../public/90428.json'
 
import { Container } from 'react-bootstrap'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
})

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <section className={`${styles['outer-wrapper']} d-none d-lg-block`}>
        <div className={styles['inner-wrapper']}>
          <div className={styles['img-container']}>
            {/* <Image
              src={content?.events?.seven?.img?.src}
              alt={content?.events?.seven?.img?.alt}
              height={content?.events?.seven?.img?.height}
              width={content?.events?.seven?.img?.width}
            /> */}
            <div style={{ width: 241, height: 241, background: '#fff', borderRadius: 288 }}>
            <Lottie animationData={animationData} loop={true} />
          </div>
          </div>
          <div className={styles['content']}>
            <h3>{content?.events?.seven?.h3}</h3>
            <p>{content?.events?.seven?.p}</p>
            <Button
              text={content?.events?.seven?.button?.text}
              type={content?.events?.seven?.button?.type}
              onClick={() => {
                setIsOpen(true)
              }}
              height={content?.events?.seven?.button?.height}
              width={content?.events?.seven?.button?.width}
            />
          </div>
        </div>
      </section>
      <Container className='d-lock d-lg-none d-flex align-items-center justify-content-center sm'>
      <section className={`${styles['outer-wrapper']} d-lock d-lg-none d-flex align-items-center justify-content-center sm`}>
        <div className={styles['inner-wrapper-sm']}>
          <div className={styles['img-container-sm']}>
            {/* <Image
              src={content?.events?.seven?.img?.src}
              alt={content?.events?.seven?.img?.alt}
              height={content?.events?.seven?.img?.height}
              width={content?.events?.seven?.img?.width}
            /> */}
            <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: 288 }}>
            <Lottie animationData={animationData} loop={true} />
          </div>
          </div>
          <div className={styles['content-sm']}>
            <h3>{content?.events?.seven?.h3}</h3>
            <p>{content?.events?.seven?.p}</p>
            <Button
              text={content?.events?.seven?.button?.text}
              type={content?.events?.seven?.button?.type}
              onClick={() => {
                setIsOpen(true)
              }}
              height={content?.events?.seven?.button?.height}
              width={content?.events?.seven?.button?.width}
            />
          </div>
        </div>
      </section>
      </Container>
      <VolunteerModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      />
    </>
  )
}

export default Index
