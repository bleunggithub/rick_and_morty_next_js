import { Episode } from '../interface/episodes'
import { StatusContainer } from '../styles/Cards'
import EpisodeInfoCard from './EpisodeInfoCard'
import Loader from './Loader'

interface EpisodeCardListProps{
  episodeInfo?: Episode[]
  nextPage?: null | boolean
  handleLoadMore?: () => void
  loading?: boolean
  error?: string | null
}

const EpisodeCardList = ({
  episodeInfo, 
  nextPage, 
  handleLoadMore, 
  loading, 
  error
}: EpisodeCardListProps) => {
  return (
    <>
      {episodeInfo?.map((episode)=>(
        <EpisodeInfoCard 
          key={episode.id} 
          episode={episode}
        />
      ))}
      <StatusContainer>
        {loading && <Loader />}
        { nextPage && !loading && (
          <button onClick={handleLoadMore}>
            <span>Load more</span>
          </button>
        )}
        { error && <p>An error has occurred: {error}</p>}
      </StatusContainer>
    </>
  )
}

export default EpisodeCardList
