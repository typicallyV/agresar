import { FunctionComponent } from 'react'
import Card from '../../atoms/card'
import styles from './accordian.module.scss'
import Image from 'next/image'

interface Props {
  open: boolean
  title?: string
  content?: string
  onClick?: () => void
  openIcon?: string
  closeIcon?: string
}

const Index: FunctionComponent<Props> = ({
  open = false,
  title = 'title',
  content = 'content',
  onClick = () => {},
  openIcon = '',
  closeIcon = '',
}) => {
  return (
    <Card
      customStyles={{
        borderRadius: '12px',
        background: open ? '#fffcf3' : '#fff',
      }}
    >
      <div className={styles['wrapper']}>
        <div className={styles['top']} onClick={onClick}>
          <h4>{title}</h4>
          <Image
            className={styles['icon']}
            src={open ? openIcon : closeIcon}
            alt={open ? 'open' : 'close'}
            width={17}
            height={8}
          />
        </div>
        <p className={open ? styles['open'] : ''}>{content}</p>
      </div>
    </Card>
  )
}

export default Index
