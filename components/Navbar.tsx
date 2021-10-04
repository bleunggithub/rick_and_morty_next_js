import { AppLogoContainer, NavbarRoot, AppTitleContainer, NavLinksContainer, MenuButtonContainer, Hamburger } from '../styles/Navbar'
import Image from 'next/image'
import appIcon from '../public/app-icon.png'
import Link from 'next/dist/client/link'
import SearchBar from './SearchBar'
import { routeOptions } from '../interface'
import { useTransform, useViewportScroll } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

const AppHeader = () => {
  return(
    <AppTitleContainer>
      <h2>Rick</h2>
      <Link href="/" passHref scroll={false}>
        <a>
          <AppLogoContainer>
            <Image src={appIcon} layout="fill" />
          </AppLogoContainer>
        </a>
      </Link>
      <h2>Morty</h2>
    </AppTitleContainer>
 )
}

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const {route} = useRouter()
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const toggleMenu = () => {
    setScrollPosition(window.scrollY)

    if (!isOpenMenu){
      document.body.style.position = 'fixed'
    } else {
      document.body.style.position = ''
      window.scrollTo(0, scrollPosition || 0)
    }
    setIsOpenMenu(!isOpenMenu)
  }

  const closeMenu = () => {
    document.body.style.position = ''
    setIsOpenMenu(false)
  }

  const {scrollY} = useViewportScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 160, 200],
    ["rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.50)"]
  )

  const y = useTransform(scrollY, [0,100],[600,0])
  
  return (
    <NavbarRoot style={{ backgroundColor, y: route === '/' ? y : 0 }}>
      
      <AppHeader />
      
      <MenuButtonContainer onClick={toggleMenu}>
        <Hamburger isOpen={isOpenMenu}  home={route === '/'}  />
      </MenuButtonContainer>

      <NavLinksContainer isOpen={isOpenMenu} home={route === '/'}>
        <SearchBar closeMenu={closeMenu} />

        {routeOptions.map((route)=>(
          <Link href={`/${route}`} key={route} passHref scroll={false}>
            <a onClick={closeMenu}>{route}</a>
          </Link>
        ))}
        
      </NavLinksContainer>
    </NavbarRoot>
  )
}

export default Navbar
