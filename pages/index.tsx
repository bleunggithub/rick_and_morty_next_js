
import { useState } from 'react'
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.scss'
import MetaData from '../components/MetaData'
import SearchBar from '../components/SearchBar'
import EpisodeInfoCardList from '../components/EpisodeInfoCardList'

import { Episode, Episodes, EpisodesDetails } from '../interface'
import { initializeApollo } from '../lib/apolloClient'
import { GET_ALL_EPISODES } from '../GraphQL/Queries'
import { useLazyQuery } from '@apollo/client'

interface HomeProps {
  episodes: Episodes
}

export default function Home({episodes}:HomeProps) {
  const [episodeDetails, setEpisodeDetails] = useState<Episode[]>(episodes.results)
  const [nextPage, setNextPage] = useState<number | null>(episodes.info.next)
  const [error, setError] = useState<null | string>(null)

  const [loadmore, {loading}] = useLazyQuery<EpisodesDetails>(GET_ALL_EPISODES,{
    onCompleted: data => {
      setError(null)
      setNextPage(data.episodes.info.next)
      setEpisodeDetails(cur => [...cur, ...data.episodes.results])
    },
    onError: err => {
      setError(err.message)
    }
  })

  const handleLoadMore = () => {
    loadmore({
      variables: {
        page: nextPage
      }
    })
  }


  return (
    <div className={styles.homeRoot}>
      <MetaData />
      <main className={styles.fullScreenContainer}>
        <h1>Rick and Morty</h1>
        <SearchBar />
        <div className={styles.cardsContainer}>
          <h3>Episodes</h3>
          <EpisodeInfoCardList episodeInfo={episodeDetails} />
          {nextPage ? (
            <button onClick={handleLoadMore}>Load more</button>
          ):(
            <p>This is the end of the List :&#40;</p>
          )}
          {loading && (<p>Loading...</p>)}
          {error && (<p>An error has occurred: {error}</p>)}
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