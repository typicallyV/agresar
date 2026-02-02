import Image from 'next/image'
import styles from './navItem.module.scss'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import underline from '../../../public/underline.svg'

interface Props {
  text: string
  selected?: boolean
  onClick?: () => void
}

const Index: FunctionComponent<Props> = ({
  text = 'Home',
  selected = true,
  onClick = () => {},
}) => {
  const [textWidth, setTextWidth] = useState(0)
  const textRef = useRef(null)
  useEffect(() => {
    if (window) {
      // @ts-ignore
      setTextWidth(textRef.current.offsetWidth)
    }
  }, [text])

  return (
    
    <li className='nav-item'>
    <div className={styles['wrapper']} onClick={onClick}>
      <div>
        <p className='nav-link ' ref={textRef}>{text}</p>
        <div
          style={{
            visibility: selected ? 'visible' : 'hidden',
          }}
        >
          <Image src={underline} alt="underline" width={textWidth} />
        </div>
      </div>
    </div>
    </li>
  )
}

export default Index
