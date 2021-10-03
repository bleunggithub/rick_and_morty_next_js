import { useLazyQuery } from '@apollo/client'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import { animationProps } from '../../animations/defaultValues'
import { contentVariants } from '../../animations/variants'
import EpisodeInfoCardList from '../../components/EpisodeInfoCardList'
import SearchBar from '../../components/SearchBar'
import { GET_EPISODES } from '../../GraphQL/episodes'
import { Episode, Episodes, EpisodesDetails } from '../../interface/episodes'
import { initializeApollo } from '../../lib/apolloClient'
import { PageHomeRoot, EpisodesHomeMainContentContainer } from '../../styles/OptionsPage'

interface EpisodesPageProps {
  episodes: Episodes
}

const EpisodesPage = ({episodes}: EpisodesPageProps) => {

  const [episodeDetails, setEpisodeDetails] = useState<Episode[]>(episodes.results)
  const [nextPage, setNextPage] = useState<number | null>(episodes.info.next)
  const [error, setError] = useState<null | string>(null)

  const [loadmore, {loading, fetchMore}] = useLazyQuery<EpisodesDetails>(GET_EPISODES,{
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
    <PageHomeRoot>

      <EpisodesHomeMainContentContainer
        variants={contentVariants}
        {...animationProps}
      >
        <EpisodeInfoCardList episodeInfo={episodeDetails}/>
      </EpisodesHomeMainContentContainer>
    </PageHomeRoot>
  )
}

export default EpisodesPage

export const getStaticProps: GetStaticProps = async() =>{

  const apolloClient = initializeApollo()

  const {data: { episodes }} = await apolloClient.query<EpisodesDetails>({
    query: GET_EPISODES,
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