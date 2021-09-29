import { useRouter } from 'next/dist/client/router'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import { Routes } from '../interface'
import HomeMenuOption from '../components/HomeMenuOption'

export default function Index() {
  const [selectedRoute, setSelectedRoute] = useState<null | Routes>(null)

  const router = useRouter()

  const handleClickLink = (e: React.MouseEvent<HTMLAnchorElement>, selected: Routes) => {
    e.preventDefault()
    setSelectedRoute(selected)
    router.push(selected)
  }

  return (
    <div className={styles.homeRoot}>
      <main className={styles.homeContainer}>
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
      </main>
    </div>
  )
}
