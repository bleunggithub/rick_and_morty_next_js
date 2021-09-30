import Link from 'next/link'
import { Episode } from '../interface'
import { EpisodeCard, TitleText, DetailText, EpisodeIdText } from '../styles/Cards'
interface EpisodeInfoCardProps{
  episode: Episode
}

const EpisodeInfoCard = ({ episode }: EpisodeInfoCardProps) => {

  return (
    <EpisodeCard>
      <div>
        <TitleText>Episode Name</TitleText>
        <DetailText>{episode.name}</DetailText>
      </div>

      <div>
        <TitleText>Air Date</TitleText>
        <DetailText>{episode.air_date}</DetailText>
      </div>

      <div>
        <TitleText>Created</TitleText>
        <DetailText>{new Date(episode.created).toLocaleDateString()}</DetailText>
      </div>

      <div>
        <TitleText>Characters</TitleText>
        {episode.characters.slice(0,3).map((ch)=>(
          <DetailText key={ch.id}>{ch.name}</DetailText>
        ))}
        {episode.characters.length > 3 && (
          <small>and more</small>
        )}
      </div>

      <div>
        <EpisodeIdText>{episode.id}</EpisodeIdText>
        <Link href={`/episodes/${episode.id}`}>... see more</Link>
      </div>
    </EpisodeCard>
  )
}

export default EpisodeInfoCard
