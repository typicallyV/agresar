import styles from './five.module.scss'
import { content } from '../../../../constants/content'
import Accordian from '../../../molecules/accordian'
import { useState } from 'react'
import Image from 'next/image'

const Index = () => {
  const [openAccordian, setOpenAccordian] = useState(0)
  const [currentImage, setCurrentImage] = useState('')

  const handleAccordian = (index: number) => {
    if (openAccordian === index) {
      setOpenAccordian(-1)
    } else {
      setOpenAccordian(index)
    }
  }

  const images = ['/assets/home/five/item-1.jpg','/assets/home/five/item-2.png','/assets/home/five/item-3.png','/assets/home/five/item-4.jpg','/assets/home/five/item-5.jpg']

  return (
    <>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <h2>{content?.home?.five?.h2}</h2>
          <div className={styles['content']}>
            <div className={styles['left']}>
              {content?.home?.five?.left?.accordions?.map((item, index) => (
                <Accordian
                  key={index}
                  open={index == openAccordian}
                  title={item?.title}
                  content={item?.content}
                  openIcon={item?.openIcon}
                  closeIcon={item?.closeIcon}
                  onClick={() => {
                    handleAccordian(index)
                  }}
                />
              ))}
            </div>
            <div className={styles['right']}>
              <Image
                src={images[openAccordian] || '/logo.svg'}
                alt={content?.home?.five?.right?.img?.alt}
                width={content?.home?.five?.right?.img?.width}
                height={content?.home?.five?.right?.img?.height}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
