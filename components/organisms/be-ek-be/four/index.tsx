import styles from './four.module.scss'
import Image from 'next/image'
import { content } from '../../../../constants/content'

const Index = () => {
  return (
    <>
      <section className={styles['outer-wrapper']}>
        {/* <h2>{content?.['be-ek-be']?.four?.h2}</h2> */}
        {/* <section className={styles['inner-wrapper']}> */}
        <div>
          {/* Gallery Card */}
          <div
            style={{
              backgroundImage: 'url(/assets/home/six/item-1.png)',
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
              <p>Ambulance Service - Call on 7030000201 7030000203</p>
              <Image
                src="/assets/home/six/logo.svg"
                alt="logo"
                width={62}
                height={62}
              />
            </div>
          </div>
          {/* ========== */}
        </div>
        <div className={styles['center']}>
          {/* Gallery Card */}
          <div
            style={{
              backgroundImage: 'url(/assets/home/six/item-1.png)',
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
              <p>Ambulance Service - Call on 7030000201 7030000203</p>
              <Image
                src="/assets/home/six/logo.svg"
                alt="logo"
                width={62}
                height={62}
              />
            </div>
          </div>
          {/* ========== */}
          {/* Gallery Card */}
          <div
            style={{
              backgroundImage: 'url(/assets/home/six/item-1.png)',
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
              <p>Ambulance Service - Call on 7030000201 7030000203</p>
              <Image
                src="/assets/home/six/logo.svg"
                alt="logo"
                width={62}
                height={62}
              />
            </div>
          </div>
          {/* ========== */}
        </div>
        <div className={styles['left']}>
          {/* Gallery Card */}
          <div
            style={{
              backgroundImage: 'url(/assets/home/six/item-1.png)',
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
              <p>Ambulance Service - Call on 7030000201 7030000203</p>
              <Image
                src="/assets/home/six/logo.svg"
                alt="logo"
                width={62}
                height={62}
              />
            </div>
          </div>
          {/* ========== */} {/* Gallery Card */}
          <div
            style={{
              backgroundImage: 'url(/assets/home/six/item-1.png)',
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
              <p>Ambulance Service - Call on 7030000201 7030000203</p>
              <Image
                src="/assets/home/six/logo.svg"
                alt="logo"
                width={62}
                height={62}
              />
            </div>
          </div>
          {/* ========== */}
        </div>
        <div className={styles['right']}>
          {/* Gallery Card */}
          <div
            style={{
              backgroundImage: 'url(/assets/home/six/item-1.png)',
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
              <p>Ambulance Service - Call on 7030000201 7030000203</p>
              <Image
                src="/assets/home/six/logo.svg"
                alt="logo"
                width={62}
                height={62}
              />
            </div>
          </div>
          {/* ========== */} {/* Gallery Card */}
          <div
            style={{
              backgroundImage: 'url(/assets/home/six/item-1.png)',
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
              <p>Ambulance Service - Call on 7030000201 7030000203</p>
              <Image
                src="/assets/home/six/logo.svg"
                alt="logo"
                width={62}
                height={62}
              />
            </div>
          </div>
          {/* ========== */}
        </div>
        <div>
          {/* Gallery Card */}
          <div
            style={{
              backgroundImage: 'url(/assets/home/six/item-1.png)',
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
              <p>Ambulance Service - Call on 7030000201 7030000203</p>
              <Image
                src="/assets/home/six/logo.svg"
                alt="logo"
                width={62}
                height={62}
              />
            </div>
          </div>
          {/* ========== */}
        </div>
        {/* </section> */}
      </section>
    </>
  )
}

export default Index
