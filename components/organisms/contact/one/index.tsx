// @ts-nocheck
import styles from './one.module.scss'
import { content } from '../../../../constants/content'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Index = () => {
  const handleVolunteerClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeF6y7Y9qyuZleoBMi8XTe3Kfj708MfEJSdMa-x3p0NnJe9dw/viewform',
      '_blank'
    )
  }

  return (
    <>
      <Container fluid className="p-0">
        <section className={styles['outer-wrapper']}>
          <div className={styles['inner-wrapper']}>

            {/* Left: Orange girl + "Contact Us" text */}
            <div className={styles['hero-image-side']}>
              <Image
                src={content?.contact?.one?.section1?.img?.src}
                alt={content?.contact?.one?.section1?.img?.alt}
                height={content?.contact?.one?.section1?.img?.height}
                width={content?.contact?.one?.section1?.img?.width}
              />
              <h2>{content?.contact?.one?.section1?.h2}</h2>
            </div>

            {/* Right: CTA Banner in the blank space */}
            <div className={styles['cta-side']}>
              <div className={styles['cta-banner']}>
                <div className={styles['cta-icon-circle']}>
                  {/*
                    =============================================
                    REPLACE THE src BELOW WITH YOUR GIF PATH
                    e.g. src="/assets/volunteer-handshake.gif"
                    =============================================
                  */}
                  <Image
                    src="/handshake-47.gif (1).webp"
                    alt="volunteer icon"
                    className={styles['cta-gif']}
                     width={200}
  height={200}
                  />
                </div>
                <div className={styles['cta-text']}>
                  <h3>Lets begin with a conversation</h3>
                  <p>we are open for thoughts and views for our project</p>
                  <button
                    className={styles['cta-button']}
                    onClick={handleVolunteerClick}
                  >
                    Click here
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </Container>
    </>
  )
}

export default Index