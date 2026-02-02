import styles from './footer.module.scss'
import { content } from '../../../constants/content'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Index = () => {
  const { push } = useRouter()
  return (
    <>
      <footer className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <section className={styles['top']}>
            <div className={styles['left']}>
              <Image
                src={content?.footer?.logo?.src}
                alt={content?.footer?.logo?.alt}
                width={content?.footer?.logo?.width}
                height={content?.footer?.logo?.height}
              />
            </div>
            <div className={styles['right']}>
              {content?.footer?.social?.map((item: any, index: number) => (
                <Image
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  height={24}
                />
              ))}
            </div>
          </section>
          <hr />
          <section className={styles['middle']}>
            {content?.footer?.columns?.map((item: any, index: number) => (
              <div key={index}>
                <h4>{item.title}</h4>
                {item?.links?.map((link: any, index: number) => (
                  <div key={index}>
                    {link?.href ? (
                      <p
                        onClick={() => {
                          push(link?.href)
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        {link?.text}
                      </p>
                    ) : link?.withIcon ? (
                      <div style={{ cursor: 'pointer' }}>
                        <Image
                          src={link?.icon?.src}
                          alt={link?.icon?.alt}
                          width={link?.icon?.width}
                          height={link?.icon?.height}
                        />
                        <p>{link?.text}</p>
                      </div>
                    ) : (
                      <p style={{ cursor: 'pointer' }}>{link?.text}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
            <div className={styles['map-container']}>
              <iframe
                src={content?.footer?.iframe?.src}
                width={content?.footer?.iframe?.width}
                height={content?.footer?.iframe?.height}
                style={content?.footer?.iframe?.style}
                loading="lazy"
              ></iframe>
            </div>
          </section>
          <hr />
          <section className={styles['bottom']}>
            <div className={styles['left']}>
              {content?.footer?.bottom?.left?.map(
                (item: any, index: number) => (
                  <div key={index}>{item?.text}</div>
                )
              )}
            </div>
            <div className={styles['right']}>
              {content?.footer?.bottom?.right?.map(
                (item: any, index: number) => (
                  <div style={{ cursor: 'pointer' }} key={index}>
                    {item?.text}
                  </div>
                )
              )}
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}

export default Index
