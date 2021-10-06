import { AlignRightText, EpisodeListContainer } from '../styles/Cards'
import { FlexRow } from "../styles/BaseElements"
import { Character } from '../interface/characters'
import Link from "next/link"

type ExpandedCardTextProps = Pick<Character, "id" | "name" | "gender" | "species" | "status" | "origin" | "location" | "episode">

interface RowWithLinkProps {
  padding: string
  url: string
  title?: string
  content: string
}

type RowProps = Omit<RowWithLinkProps, "url">

const Row = ({ padding, title, content }: RowProps) => {
  return (
    <FlexRow padding={padding}>
      {
        !title ? (
          <p>#{content}</p>
        ):(
          <>
            <span>{title}</span>
            <AlignRightText>{content}</AlignRightText>
          </>
        )
      }
    </FlexRow>
  )
}

const RowWithLink = ({ padding, title, url, content }: RowWithLinkProps) => {
  return (
    <FlexRow padding={padding}>
      <span>{title}</span>
      <Link href={url} passHref>
        <a><AlignRightText>{content}</AlignRightText></a>
      </Link>
    </FlexRow>
  )
}

const ExpandedCardText = ({
  id,
  name,
  gender,
  species,
  status,
  origin,
  location,
  episode
}: ExpandedCardTextProps) => {
  return (
    <div>
      <Row padding="1rem" content={`${id} ${name}`} />
      <Row padding="0 1rem" title="Gender" content={gender || 'Unknown'} />
      <Row padding="0 1rem" title="Species" content={species || 'Unknown'} />
      <Row padding="0 1rem" title="Status" content={status || 'Unknown'} />
      <RowWithLink
        padding="0 1rem"
        title="Origin"
        url={`/locations/?id=${origin.id}`}
        content={origin.name || 'Unknown'}
      />
      <RowWithLink
        padding="0 1rem"
        title="Location"
        url={`/locations/?id=${location.id}`}
        content={location.name || 'Unknown'}
      />


      <FlexRow padding="1rem" flexDirection="column">
        <p>Starred in</p>
        <EpisodeListContainer>
          {episode?.map((episode) => (
            <Link key={episode.id} href={`/episodes/${episode.id}`}>
              <a>
                <span>#{episode.id} </span>
                <span>{episode.name} </span>
              </a>
            </Link>
          ))} 
        </EpisodeListContainer>
      </FlexRow>

    </div>
  )
}

export default ExpandedCardText
