import styles from './six.module.scss'
import Image from 'next/image'

const Index = () => {
  return (
    <>
      <section className={styles['outer-wrapper']}>
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
              backgroundImage: 'url(/assets/home/six/item-2.jpg)',
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
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
              backgroundImage: 'url(/assets/home/six/item-3.jpg)',
              backgroundSize: '120% 100%',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
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
              backgroundImage: 'url(/assets/home/six/item-4.jpg)',
              backgroundSize: '100% 100%',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
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
              backgroundImage: 'url(/assets/home/six/item-5.jpg)',
              backgroundSize: '100% 100%',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
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
              backgroundImage: 'url(/assets/home/six/item-6.jpg)',
              backgroundSize: '100% 100%',
              position: 'relative',
            }}
          >
            <div className={styles['profile']}>
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
      </section>
    </>
  )
}

export default Index
