import { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './navbar.module.scss'
import NavItem from '../../atoms/navItem'
import { navItems } from '../../../constants/content'

const Index: FunctionComponent = () => {
  const { push, asPath } = useRouter()
  const [selected, setSelected] = useState(asPath)

  useEffect(() => {
    setSelected(asPath)
  }, [asPath])

  // ✅ NEW: Handle smooth scroll for anchor links
  const handleNavClick = (href: string) => {
    // Check if it's an anchor link (starts with /#)
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '')
      const element = document.getElementById(sectionId)
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        setSelected(href)
      }
    } else {
      // Regular navigation
      setSelected(href)
      push(href)
    }
  }

  return (
    <section className={styles['outer-wrapper']}>
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <Image src={'/logo.svg'} alt="logo" width={200} height={130} />
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              {navItems?.map((el, i) => (
                <NavItem
                  key={i}
                  text={el?.text}
                  selected={el?.href === selected}
                  onClick={() => handleNavClick(el?.href)}
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