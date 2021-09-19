import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import SearchBar from '../components/SearchBar'
import EpisodeInfoCardList from '../components/EpisodeInfoCardList'


export default function Home() {
  const tempArr = [0,1,2,3,4]
  
  return (
    <div className={styles.homeRoot}>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Next.js app that displays the details of each Rick and Morty Episode with implementation of Apollo Client and GraphQL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.fullScreenContainer}>
        <h1>Rick and Morty</h1>
        <SearchBar />
        <div className={styles.cardsContainer}>
          <EpisodeInfoCardList episodeInfo={tempArr} />
        </div>
      </main>

      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}

    </div>
  )
}
