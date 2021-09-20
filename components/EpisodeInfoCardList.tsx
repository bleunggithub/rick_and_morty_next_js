import { useQuery } from '@apollo/client'
import { GET_ALL_EPISODES } from '../GraphQL/Queries'
import { Episode } from '../interface'
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
