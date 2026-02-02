import styles from './nine.module.scss'
import { content } from '../../../../constants/content'
import Card from '../../../atoms/card'
import Image from 'next/image'
import Button from '../../../atoms/button'
import { useState } from 'react'
import DonationModal from '../../../organisms/donationModal'
import animationData from '../../../../public/115250.json'
 
import { Container,Row } from 'react-bootstrap'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
})

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  }
  return (
    <>
      <div className='d-none d-lg-block'>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <div className={styles['content-wrapper']}>
            <h2>{content?.home?.nine?.h2}</h2>
            <p>{content?.home?.nine?.p}</p>
            <Button
              type={content?.home?.nine?.button?.type}
              text={content?.home?.nine?.button?.text}
              onClick={handleClick}
              prefix={content?.home?.nine?.button?.prefix?.src}
              customStyles={{
                display: ' flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
              }}
            />
          </div>
          {/* <Card
            customStyles={{
              height: '100%',
              width: '376px',
              borderRadius: '188px',
              background: '#fff',
            }}
          /> */}
          <div style={{ width: '32%', height: 393, background: '#fff', borderRadius: 288 }}>
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </section>
      </div>
      <Container fluid style={{marginBottom: '20%'}} className='d-lock d-lg-none d-flex align-items-center justify-content-center sm'>
          <div className={`${styles['outer-wrapper']} d-lock d-lg-none d-flex align-items-center justify-content-center sm`}>
            <div className={styles['inner-wrapper-sm']}>
              <div className={styles['content-wrapper-sm']}>
              <Row xs={12} className='d-flex justify-content-center'>
            <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '100%',  display: 'flex', alignContent: 'center' }}>
              <Lottie animationData={animationData} loop={true} />
            </div> 
          </Row>
          <Row className='d-flex justify-content-center'>
            <h3>{content?.home?.nine?.h2}</h3>
            <h3>{content?.home?.nine?.p}</h3>
            <div className='d-flex justify-content-center align-items-center'>
            <Button
              type={content?.home?.nine?.button?.type}
              text={content?.home?.nine?.button?.text}
              onClick={handleClick}
              prefix={content?.home?.nine?.button?.prefix?.src}
              customStyles={{
                display: ' flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
              }}
            />
            </div>
          </Row>
              </div>
            </div>
          </div>
      </Container>
      <DonationModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      />
    </>
  )
}

export default Index
