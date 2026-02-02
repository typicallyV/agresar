import styles from './seven.module.scss'
import { content } from '../../../../constants/content'
import Card from '../../../atoms/card'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

const Index = () => {
  const handleClick = (item: any) => {}

  return (
    <Container>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <h2>{content?.home?.seven?.h2}</h2>
          <div className={styles['content']}>
            {content?.home?.seven?.cards?.map((item, index) => (
              <Card
                key={index}
                customStyles={{
                  width: '350px',
                  height: '214px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '22px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  handleClick(item)
                }}
              >
                <Image
                  src={item?.src}
                  alt={item?.alt}
                  width={item?.width}
                  height={item?.height}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Index
