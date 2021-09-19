import EpisodeInfoCard from './EpisodeInfoCard'

interface EpisodeInfoCardListProps{
  episodeInfo: number[]
}

const EpisodeInfoCardList = ({episodeInfo}: EpisodeInfoCardListProps) => {
  return (
    <>
      {
        episodeInfo.map((episode)=>(
          <EpisodeInfoCard 
            key={episode} 
            id={episode}
          />
        ))
      }
    </>
  )
}

export default EpisodeInfoCardList
