import { Episode } from '../interface/episodes'
import EpisodeInfoCard from './EpisodeInfoCard'

interface EpisodeInfoCardListProps{
  episodeInfo: Episode[]
}

const EpisodeInfoCardList = ({episodeInfo}: EpisodeInfoCardListProps) => {
  return (
    <>
      {
        episodeInfo.map((episode)=>(
          <EpisodeInfoCard 
            key={episode.id} 
            episode={episode}
          />
        ))
      }
    </>
  )
}

export default EpisodeInfoCardList
