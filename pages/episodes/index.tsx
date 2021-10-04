import { useState, useCallback } from 'react'
import { useQuery } from '@apollo/client'
import { animationProps } from '../../animations/defaultValues'
import { contentVariants } from '../../animations/variants'
import EpisodeInfoCardList from '../../components/EpisodeInfoCardList'
import { GET_EPISODES } from '../../GraphQL/episodes'
import { EpisodesDetails } from '../../interface/episodes'
import { PageHomeRoot, EpisodesHomeMainContentContainer } from '../../styles/OptionsPage'


const EpisodesPage = () => {

  const [error, setError] = useState<null | string>(null)

  const {loading, fetchMore, data} = useQuery<EpisodesDetails>(GET_EPISODES, {
    notifyOnNetworkStatusChange: true,
    onError: err => setError(err.message)
  })

  const { episodes } = data || {};

  const next = episodes?.info?.next;

  const handleLoadMore = useCallback(() =>
      fetchMore({
        variables: { page: next },
      }),
    [fetchMore, next]
  )

  return (
    <PageHomeRoot>

      <EpisodesHomeMainContentContainer
        variants={contentVariants}
        {...animationProps}
      >
        <p>Episodes</p>
        <EpisodeInfoCardList 
          episodeInfo={episodes?.results}
          nextPage={!!next}
          handleLoadMore={handleLoadMore}
          loading={loading}
          error={error}
        />
      </EpisodesHomeMainContentContainer>
    </PageHomeRoot>
  )
}

export default EpisodesPage
