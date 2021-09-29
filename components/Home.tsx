import { useRouter } from 'next/dist/client/router'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import { Routes } from '../interface'
import HomeMenuButton from './HomeMenuButton'

const Home = () => {
  const [selectedRoute, setSelectedRoute] = useState<null | Routes>(null)

  const router = useRouter()

  const handleClickLink = (e: React.MouseEvent<HTMLAnchorElement>, selected: Routes) => {
    e.preventDefault()
    setSelectedRoute(selected)
    router.push(selected)
  }

  return (
      <main className={styles.fullScreenContainer}>
        <HomeMenuButton 
          routeName='episodes' 
          selected={selectedRoute === 'episodes'}
          handleClickLink={handleClickLink}
          offset='50vw'
        />
        <HomeMenuButton 
          routeName='characters' 
          selected={selectedRoute === 'characters'}
          handleClickLink={handleClickLink}
        />
        <HomeMenuButton 
          routeName='locations' 
          selected={selectedRoute === 'locations'}
          handleClickLink={handleClickLink}
          offset='-50vw'
        />
      </main>
  )
}

export default Home
