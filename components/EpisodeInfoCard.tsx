import Link from 'next/link'
import { Episode } from '../interface/episodes'
import Avatars from './Avatars'
import { EpisodeCard, EpisodeNameText, TitleText, DetailText } from '../styles/Cards'
import { FlexRow } from '../styles/BaseElements'
import { parseEpisodeSeasons } from '../helpers/episodes'
interface EpisodeInfoCardProps{
  episode: Episode
}

const EpisodeInfoCard = ({ episode }: EpisodeInfoCardProps) => {

  return (
    <EpisodeCard>
      <FlexRow margin="0 0 1rem 0">
        <Link href={`/episodes/${episode.id}`}>
          <EpisodeNameText>#{episode.id} {episode.name}</EpisodeNameText>
        </Link>
      </FlexRow>

      <FlexRow margin="0 0 0.8rem 0">
        <TitleText>Air Date</TitleText>
        <DetailText>{episode.air_date}</DetailText>
      </FlexRow>

      <FlexRow margin="0 0 0.8rem 0">
        <TitleText>Episode</TitleText>
        <DetailText>{parseEpisodeSeasons(episode.episode)}</DetailText>
      </FlexRow>
      
      <TitleText fullWidth>Characters</TitleText>
        <Avatars characters={episode.characters.slice(0,6)} />
    </EpisodeCard>
  )
}

export default EpisodeInfoCard
