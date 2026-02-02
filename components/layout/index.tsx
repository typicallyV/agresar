import { FunctionComponent, ReactNode, useState } from 'react'
import Navbar from '../../components/molecules/navbar'
import Footer from '../../components/organisms/footer'
import Button from '../../components/atoms/button'
import DonationModal from '../../components/organisms/donationModal'

interface Props {
  children?: ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  const [hovered, setHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: '300px',
          right: '0',
          rotate: '90deg',
          // transformOrigin: 'top right',
          zIndex: 9999,
          boxShadow: hovered ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Button
          text="Donate now"
          type="primary"
          onClick={() => {
            setIsOpen(true)
          }}
          customStyles={{ borderRadius: '0' }}
        />
      </div>

      <Navbar />

      <main>{children}</main>
      <Footer />
      <DonationModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      />
    </div>
  )
}

export default Layout
