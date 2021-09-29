import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import appIcon from '../public/app-icon.png'
import { useRef, useEffect } from 'react'
import Link from 'next/dist/client/link'

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && ref.current) {
      let prevScrollPos = window.pageYOffset

      window.onscroll = () => {
        const maxScroll = document.body.clientHeight - window.innerHeight
        const currentScrollPos = window.pageYOffset
        
        if ((maxScroll > 0 && prevScrollPos > currentScrollPos && prevScrollPos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollPos > currentScrollPos) ||
          (prevScrollPos <= 50 && currentScrollPos <= 50)
        ) {
          ref.current!.style.top = '0'
        } else {
          ref.current!.style.top = '-150px'
        }
        prevScrollPos = currentScrollPos
      }
    }
  },[])

  return (
    <nav className={styles.navbarRoot} ref={ref}>
      <Image src={appIcon} width={50} height={50} />
      <Link href="/">
        <h2>Rick and Morty</h2>
      </Link>
    </nav>
  )
}

export default Navbar
