import Link from 'next/link'
import { Episode } from '../interface/episodes'
import AvatarList from './AvatarList'
import { EpisodeCard, EpisodeNameText, TitleText, DetailText, StatusContainer } from '../styles/Cards'
import { FlexRow } from '../styles/BaseElements'
import { parseEpisodeSeasons } from '../helpers/episodes'

interface EpisodeInfoCardProps{
  episode: Episode
}

const EpisodeInfoCard = ({ episode }: EpisodeInfoCardProps) => {

  return (
    <>
      <EpisodeCard>
        <FlexRow margin="0 0 1rem 0">
          <Link href={`/episodes/${episode.id}`} passHref scroll={false}>
            <a><EpisodeNameText>#{episode.id} {episode.name}</EpisodeNameText></a>
          </Link>
        </FlexRow>

        <FlexRow margin="0 0 0.8rem 0">
          <DetailText>{parseEpisodeSeasons(episode.episode)}</DetailText>
        </FlexRow>

        <FlexRow margin="0 0 0.8rem 0">
          <TitleText>Air Date</TitleText>
          <DetailText>{episode.air_date}</DetailText>
        </FlexRow>
        
        <TitleText fullWidth>Characters</TitleText>
        <AvatarList characters={episode.characters.slice(0,6)} />
      </EpisodeCard>
    </>
  )
}

export default EpisodeInfoCard
