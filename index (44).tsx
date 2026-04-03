import { FunctionComponent } from 'react'
import styles from './imageContentLayout.module.scss'
import Image from 'next/image'

interface Props {
  reverse?: boolean
  background?: string
  content: {
    left: {
      h3: string
      p: string
    }
    right: {
      img: {
        src: string
        alt: string
        height: number
        width: number
      }
    }
  }
}

const Index: FunctionComponent<Props> = ({ reverse, background, content }) => {
  return (
    <>
      <section
        className={styles['outer-wrapper']}
        style={{
          backgroundColor: background || '#FFF',
        }}
      >
        <div
          className={styles['inner-wrapper']}
          style={{
            flexDirection: reverse ? 'row-reverse' : 'row',
          }}
        >
          <div>
            <Image
              className='img-fluid'
              src={content?.right?.img?.src}
              alt={content?.right?.img?.alt}
              height={content?.right?.img?.height}
              width={content?.right?.img?.width}
            />
          </div>
          <div className={styles['content']}>
            <h3>{content?.left?.h3}</h3>
            <p>{content?.left?.p}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
