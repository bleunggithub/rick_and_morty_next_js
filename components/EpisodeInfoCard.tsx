import Link from 'next/link'
import { Episode } from '../interface/episodes'
import Avatars from './Avatars'
import { EpisodeCard, EpisodeNameText, TitleText, DetailText, StatusContainer } from '../styles/Cards'
import { FlexRow } from '../styles/BaseElements'
import { parseEpisodeSeasons } from '../helpers/episodes'
import React from 'react'
interface EpisodeInfoCardProps{
  episode?: Episode
  nextPage?: number | null
  handleLoadMore?: () => void
  loading?: boolean
  error?: string | null
}

const EpisodeInfoCard = ({ episode, nextPage, handleLoadMore, loading, error }: EpisodeInfoCardProps) => {

  return (
    <>
      <EpisodeCard>
        {episode ? (
          <>
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
            <Avatars characters={episode.characters.slice(0,6)} />
          </>
        ):(
          <StatusContainer>
            { nextPage ? (
              <button onClick={handleLoadMore} disabled={loading}>
                <span>{loading ? 'Loading...' : 'Load more'}</span>
              </button>
            ):(
              <p>This is the end of the List :&#40;</p>
            )}
            { error && <p>An error has occurred: {error}</p>}
          </StatusContainer>
        )}
      </EpisodeCard>
    </>
  )
}

export default EpisodeInfoCard
