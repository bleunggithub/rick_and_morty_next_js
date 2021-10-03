import { Episode } from '../interface/episodes'
import EpisodeInfoCard from './EpisodeInfoCard'
import { CardList } from '../styles/Cards'
import { useRouter } from 'next/dist/client/router'
interface EpisodeInfoCardListProps{
  episodeInfo: Episode[]
}

const EpisodeInfoCardList = ({episodeInfo}: EpisodeInfoCardListProps) => {
  const {query: params, back} = useRouter()
  console.log(params.id)

  return (
    <CardList>
      {episodeInfo.map((episode)=>(
        <EpisodeInfoCard 
          key={episode.id} 
          episode={episode}
          isSelected={params.id === episode.id}
          back={back}
        />
      ))}
    </CardList>
  )
}

export default EpisodeInfoCardList
