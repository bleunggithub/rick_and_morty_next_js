import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { Routes } from '../interface'
import HomeMenuOption from '../components/HomeMenuOption'
import { HomeContainer, HomeRoot } from '../styles/Home'

export default function Index() {
  const [selectedRoute, setSelectedRoute] = useState<null | Routes>(null)

  const router = useRouter()

  const handleClickLink = (e: React.MouseEvent<HTMLAnchorElement>, selected: Routes) => {
    e.preventDefault()
    setSelectedRoute(selected)
    router.push(selected)
  }

  return (
    <HomeRoot>
      <HomeContainer>
        <HomeMenuOption 
          routeName='episodes' 
          selected={selectedRoute === 'episodes'}
          handleClickLink={handleClickLink}
          offset='50vw'
        />
        <HomeMenuOption 
          routeName='characters' 
          selected={selectedRoute === 'characters'}
          handleClickLink={handleClickLink}
        />
        <HomeMenuOption 
          routeName='locations' 
          selected={selectedRoute === 'locations'}
          handleClickLink={handleClickLink}
          offset='-50vw'
        />
      </HomeContainer>
    </HomeRoot>
  )
}
