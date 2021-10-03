import { Episode } from '../interface/episodes'
import EpisodeInfoCard from './EpisodeInfoCard'

interface EpisodeInfoCardListProps{
  episodeInfo: Episode[]
  nextPage: number | null
  handleLoadMore: () => void
  loading: boolean
  error: string | null
}

const EpisodeInfoCardList = ({episodeInfo, nextPage, handleLoadMore, loading, error}: EpisodeInfoCardListProps) => {
  return (
    <>
      {episodeInfo.map((episode)=>(
        <EpisodeInfoCard 
          key={episode.id} 
          episode={episode}
        />
        ))}
        <EpisodeInfoCard 
          nextPage={nextPage}
          handleLoadMore={handleLoadMore}
          loading={loading}
          error={error}
        />
    </>
  )
}

export default EpisodeInfoCardList
