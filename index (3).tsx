import styles from './card.module.scss'
import { FunctionComponent, ReactNode } from 'react'

interface Props {
  height?: number | string
  width?: number | string
  customStyles?: object
  children?: ReactNode
  onClick?: () => void
}

const Index: FunctionComponent<Props> = ({
  height = 'auto',
  width = 'auto',
  customStyles,
  children,
  onClick = () => {},
}) => {
  return (
    <div className={styles.card} style={{ ...customStyles }} onClick={onClick}>
      {children}
    </div>
  )
}

export default Index
