import Button from '../../../atoms/button'
import styles from './one.module.scss'
import { content } from '../../../../constants/content'
import Image from 'next/image'
import DonationModal from '../../../organisms/donationModal'
import { useState } from 'react'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <div className={styles['left']}>
            <h2
              dangerouslySetInnerHTML={{
                __html:content.home.one.left.h2.dangerouslySetInnerHTML,
              }}
            ></h2>
            <p
              dangerouslySetInnerHTML={{
                __html: content.home.one.left.p.dangerouslySetInnerHTML,
              }}
            ></p>
             
          </div>
          <div className={styles['right']}>
            <Image
              className='img-fluid'
              src={content.home.one.right.img.src}
              alt={content.home.one.right.img.alt}
              width={content.home.one.right.img.width}
              height={content.home.one.right.img.height}
            />
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
