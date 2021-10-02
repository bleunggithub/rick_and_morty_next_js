import { AppLogoContainer, NavbarRoot, AppTitleContainer, NavLinksContainer, MenuButtonContainer, Hamburger } from '../styles/Navbar'
import Image from 'next/image'
import appIcon from '../public/app-icon.png'
import Link from 'next/dist/client/link'
import SearchBar from './SearchBar'
import { routeOptions } from '../interface'
import { useTransform, useViewportScroll } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const closeMenu = () => {
    setIsOpenMenu(false)
  }

  const {scrollY} = useViewportScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 160, 200],
    ["rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)", "#00000080"]
  )

  const height = useTransform(scrollY, [0,50,100],[670,670,70])
  

  return (
    <NavbarRoot style={{backgroundColor, height}}>
      
      <AppTitleContainer>
        <h2>Rick</h2>
        <Link href="/">
          <a>
            <AppLogoContainer>
              <Image src={appIcon} layout="fill" />
            </AppLogoContainer>
          </a>
        </Link>
        <h2>Morty</h2>
      </AppTitleContainer>
      
      <MenuButtonContainer onClick={toggleMenu}>
        <Hamburger isOpen={isOpenMenu}/>
      </MenuButtonContainer>

      <NavLinksContainer isOpen={isOpenMenu}>
        <SearchBar />
        {routeOptions.map((route)=>(
          <Link href={`/${route}`} key={route}>
            <a onClick={closeMenu}>{route}</a>
          </Link>
        ))}
      </NavLinksContainer>
    </NavbarRoot>
  )
}

export default Navbar
