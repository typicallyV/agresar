import { content } from '../../../../constants/content'
import styles from './ten.module.scss'
import Image from 'next/image'
import Button from '../../../atoms/button'
import DonationModal from '../../../organisms/donationModal'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <section className={styles?.['outer-wrapper']}>
        <div className={styles?.['inner-wrapper']}>
          <h2>{content?.home?.ten?.h2}</h2>
          <div>
            <div className={styles?.['left']}>
              <Image
                className='img-fluid d-lock d-lg-none d-flex'
                src={content?.home?.ten?.left?.img?.src}
                alt={content?.home?.ten?.left?.img?.alt}
                width={content?.home?.ten?.left?.img?.width}
                height={content?.home?.ten?.left?.img?.height}
              />
            </div>
            <div className={styles?.['right']}>
              <h3>{content?.home?.ten?.right?.h3}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: content?.home?.ten?.right?.p,
                }}
              ></p>
              <div className={styles['donation']}>
                <div className={styles['donation-left']}>
                  <div className={styles['text']}>
                    {content?.home?.ten?.right?.button?.donationText}
                  </div>
                  <div className={styles['amount']}>
                    {content?.home?.ten?.right?.button?.donationAmount}
                  </div>
                </div>
                <Button
                  width={content?.home?.ten?.right?.button?.width}
                  text={content?.home?.ten?.right?.button?.text}
                  type={content?.home?.ten?.right?.button?.type}
                  onClick={() => {
                    setIsOpen(true)
                  }}
                  height={content?.home?.ten?.right?.button?.height}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
