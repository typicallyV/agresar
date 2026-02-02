import { FunctionComponent, useEffect, ReactNode } from 'react'
import styles from './modal.module.scss'

interface Props {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
}

const Modal: FunctionComponent<Props> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.classList.add(styles.noScroll)
      document.addEventListener('keydown', handleEscapeKey)
    } else {
      document.body.classList.remove(styles.noScroll)
      document.removeEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.body.classList.remove(styles.noScroll)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, onClose])

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={onClose}>
          X
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default Modal

// import { FunctionComponent } from 'react'
// import styles from './modal.module.scss'

// interface Props {}

// const Index: FunctionComponent<Props> = ({}) => {
//   return <></>
// }

// export default Index
