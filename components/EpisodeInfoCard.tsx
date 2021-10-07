import Link from 'next/link'
import { Episode } from '../interface/episodes'
import AvatarCarousel from './AvatarCarousel'
import { EpisodeCard, CardNameText, TitleText, DetailText } from '../styles/Cards'
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
            <a><CardNameText>#{episode.id} {episode.name}</CardNameText></a>
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
        <AvatarCarousel characters={episode.characters} />
      </EpisodeCard>
    </>
  )
}

export default EpisodeInfoCard
