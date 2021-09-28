import {useEffect, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import appIcon from '../public/app-icon.png'

const Navbar = () => {
  const navbar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && navbar.current) {
      let prevScrollPos = window.pageYOffset

      window.onscroll = () => {
        const maxScroll = document.body.clientHeight - window.innerHeight
        const currentScrollPos = window.pageYOffset
        
        if ((maxScroll > 0 && prevScrollPos > currentScrollPos && prevScrollPos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollPos > currentScrollPos) ||
          (prevScrollPos <= 50 && currentScrollPos <= 50)
        ) {
          navbar.current!.style.top = '0'
        } else {
          navbar.current!.style.top = '-150px'
        }
        prevScrollPos = currentScrollPos
      }
    }
  },[])

  return (
    <div className={styles.navbarRoot} ref={navbar}>
        <Link href="/">
          <Image src={appIcon} width={50} height={50} />
        </Link>
        <h1>Rick and Morty</h1>
    </div>
  )
}

export default Navbar
