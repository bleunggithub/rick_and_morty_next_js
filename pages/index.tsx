import { useState } from 'react'
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.scss'
import SearchBar from '../components/SearchBar'
import EpisodeInfoCardList from '../components/EpisodeInfoCardList'
import Home from '../components/Home'
import { Episode, Episodes, EpisodesDetails } from '../interface'
import { initializeApollo } from '../lib/apolloClient'
import { GET_ALL_EPISODES } from '../GraphQL/Queries'
import { useLazyQuery } from '@apollo/client'


interface IndexProps {
  episodes: Episodes
}


export default function Index({episodes}: IndexProps) {
  const [episodeDetails, setEpisodeDetails] = useState<Episode[]>(episodes.results)
  const [nextPage, setNextPage] = useState<number | null>(episodes.info.next)
  const [error, setError] = useState<null | string>(null)

  const [loadmore, {loading, fetchMore}] = useLazyQuery<EpisodesDetails>(GET_ALL_EPISODES,{
    onCompleted: data => updateEpisodeDetails(data),
    onError: err => {
      setError(err.message)
    }
  })

  const handleLoadMore = () => {
    if(!fetchMore){
      loadmore({
        variables: {
          page: nextPage
        }
      })
    } else {
      fetchMore({
        variables: {
          page: nextPage
        }
      }).then(res => {
        const {data} = res
        updateEpisodeDetails(data)
      }).catch(err => setError(err.message))
    }
  }

  const updateEpisodeDetails = (data:EpisodesDetails) => {
    setError(null)
    setNextPage(data.episodes.info.next)
    setEpisodeDetails(cur => [...cur, ...data.episodes.results])
  }


  return (
    <>
    <div className={styles.homeRoot}>
      <main className={styles.fullScreenContainer}>
        <Home />
        {/* <SearchBar />
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
        </div> */}
      </main>
    </div>
    </>
  )
}


export const getStaticProps: GetStaticProps = async() =>{

  const apolloClient = initializeApollo()

  const {data: { episodes }} = await apolloClient.query<EpisodesDetails>({
    query: GET_ALL_EPISODES,
    variables: {
      page: 1
    },
  })

  return {
    props:{
      episodes
    }
  }
}