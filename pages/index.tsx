import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { Route } from '../interface'
import HomeMenuOption from '../components/HomeMenuOption'
import { HomeContainer, HomeRoot } from '../styles/Home'
import { HeroImage } from '../components/HeroImage'

export default function Index() {
  const [selectedRoute, setSelectedRoute] = useState<null | Route>(null)

  const router = useRouter()

  const handleClickLink = (e: React.MouseEvent<HTMLAnchorElement>, selected: Route) => {
    e.preventDefault()
    setSelectedRoute(selected)
    router.push(selected)
  }

  return (
    <HomeRoot>
      <HeroImage />
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      {/* <HomeContainer>
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
      </HomeContainer> */}
    </HomeRoot>
  )
}
