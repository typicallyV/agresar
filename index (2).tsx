import Image from 'next/image'
import styles from './button.module.scss'
import { FunctionComponent, useEffect, useRef, useState } from 'react'

interface Props {
  type: 'primary' | 'secondary' | string
  onClick: (e: any) => void
  text: string
  height?: number | string
  width?: number | string
  prefix?: string
  suffix?: string
  customStyles?: object
}

const Index: FunctionComponent<Props> = ({
  type = 'primary',
  onClick = () => {},
  text = 'Click me',
  height = 48,
  width = 'auto',
  prefix = '',
  suffix = '',
  customStyles = {},
}) => {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={onClick}
        style={{
          background:
            type === 'primary'
              ? 'linear-gradient(270deg, #f58733, #feab20)'
              : '#fff',
          color: type === 'primary' ? '#fff' : '#fda821',
          height,
          width,
          ...customStyles,
        }}
      >
        {prefix && <Image src={prefix} alt="prefix" width={24} height={24} />}
        {text}
        {suffix && <Image src={suffix} alt="suffix" width={24} height={24} />}
      </button>
    </div>
  )
}

export default Index
