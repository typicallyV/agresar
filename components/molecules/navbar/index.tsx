import { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './navbar.module.scss'
import NavItem from '../../atoms/navItem'
// import logo from '../../../public/logo.svg'
import { navItems } from '../../../constants/content'

const Index: FunctionComponent = () => {
  const { push, asPath } = useRouter()
  const [selected, setSelected] = useState(asPath)

  useEffect(() => {
    setSelected(asPath)
  }, [asPath])

  return (
    <section className={styles['outer-wrapper']}>
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={'/logo.svg'} alt="logo" width={200} height={130} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">

          <ul className="navbar-nav ms-auto">
            {navItems?.map((el, i) => (
              <NavItem
                key={i}
                text={el?.text}
                selected={el?.href == selected}
                onClick={() => {
                  setSelected(el?.href)
                  push(el?.href)
                }}
              />
            ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Index
