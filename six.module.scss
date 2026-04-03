import { FunctionComponent } from 'react'
import styles from './donationModal.module.scss'
import Modal from '../../molecules/modal'
import { content } from '../../../constants/content'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

interface Props {
  isOpen: boolean
  onClose: () => void
}
const Index: FunctionComponent<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={`${styles['outer-wrapper']} d-none d-lg-block`}>
        <div className={styles['header']}>
          <div className={styles['text1']}>
            {content?.donationModal?.header?.text1}{' '}
          </div>
          <div className={styles['text2']}>
            {content?.donationModal?.header?.text2}
          </div>
        </div>
        <div className={styles['content']}>
          <div className={styles['left']}>
            <Image
              src={content?.donationModal?.content?.left?.img?.src}
              alt={content?.donationModal?.content?.left?.img?.alt}
              width={content?.donationModal?.content?.left?.img?.width}
              height={content?.donationModal?.content?.left?.img?.height}
            />
          </div>
          <div className={styles['right']}>
            <h3> {content?.donationModal?.content?.right?.h3}</h3>
            {content?.donationModal?.content?.right?.bankDetails?.map(
              (item, index) => (
                <div
                  key={index}
                  className={styles['bank-details']}
                  style={{
                    borderBottom:
                      index ===
                      content?.donationModal?.content?.right?.bankDetails
                        ?.length -
                        1
                        ? 'none'
                        : '1px solid #FA9A29',
                  }}
                >
                  <span className={styles['name']}>{item?.name + ': '} </span>
                  <span className={styles['value']}> {item?.value}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Container>
        <div className='outer-sm d-lock d-lg-none d-flex align-items-center justify-content-center sm'>
          {/* <div className={styles['header']}>
            <div className={styles['text1']}>
              {content?.donationModal?.header?.text1}{' '}
            </div>
            <div className={styles['text2']}>
              {content?.donationModal?.header?.text2}
            </div>
          </div> */}
          <div className={styles['content-sm']} style={{padding: 20}}>
            <div className={styles['left-sm']}>
              <Image
                src={content?.donationModal?.content?.left?.img?.src}
                alt={content?.donationModal?.content?.left?.img?.alt}
                width={content?.donationModal?.content?.left?.img?.width}
                height={content?.donationModal?.content?.left?.img?.height}
              />
            </div>
            <div className={styles['right-sm']}>
              <h3 style={{marginTop: 10}}> <b>{content?.donationModal?.content?.right?.h3}</b></h3>
              {content?.donationModal?.content?.right?.bankDetails?.map(
                (item, index) => (
                  <div
                    key={index}
                    className={styles['bank-details-sm']}
                    style={{
                      borderBottom:
                        index ===
                        content?.donationModal?.content?.right?.bankDetails
                          ?.length -
                          1
                          ? 'none'
                          : '1px solid #FA9A29',
                          fontFamily: 'Axiforma Regular',
                          fontSize: 20
                    }}
                  >
                    <span className={styles['name']}><b>{item?.name + ': '} </b></span>
                    <span className={styles['value']} style={{marginLeft: 5}}> {item?.value}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </Modal>
  )
}

export default Index
