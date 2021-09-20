
import { useState } from 'react'
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'
import MetaData from '../components/MetaData'
import SearchBar from '../components/SearchBar'
import EpisodeInfoCardList from '../components/EpisodeInfoCardList'

import { Episode, Episodes, EpisodesDetails } from '../interface'
import { initializeApollo } from '../lib/apolloClient'
import { GET_ALL_EPISODES } from '../GraphQL/Queries'

interface HomeProps {
  episodes: Episodes
}


export default function Home({episodes}:HomeProps) {
  const [episodeDetails, setEpisodeDetails] = useState<Episode[]>(episodes.results)

  return (
    <div className={styles.homeRoot}>
      <MetaData />

      <main className={styles.fullScreenContainer}>
        <h1>Rick and Morty</h1>
        <SearchBar />
        <div className={styles.cardsContainer}>
          <EpisodeInfoCardList episodeInfo={episodeDetails} />
        </div>
      </main>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async() =>{

  const apolloClient = initializeApollo()

  const {data: { episodes }} = await apolloClient.query<EpisodesDetails>({
    query: GET_ALL_EPISODES,
    variables: {
      page: 1
    }
  })

  return {
    props:{
      episodes
    }
  }
}