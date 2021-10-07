import { AlignRightText, ListContainer } from '../styles/Cards'
import { FlexRow } from "../styles/BaseElements"
import { Character } from '../interface/characters'
import Row from './Row'
import Link from "next/link"

type ExpandedCardTextProps = Pick<Character, "id" | "name" | "gender" | "species" | "status" | "origin" | "location" | "episode">

interface RowWithLinkProps {
  url: string
  title?: string
  content: string
}


const RowWithLink = ({ title, url, content }: RowWithLinkProps) => {
  return (
    <FlexRow padding="0 1rem">
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
      <Row content={`${id} ${name}`} />
      <Row title="Gender" content={gender || 'Unknown'} />
      <Row title="Species" content={species || 'Unknown'} />
      <Row title="Status" content={status || 'Unknown'} />
      <RowWithLink
        title="Origin"
        url={`/locations/?id=${origin.id}`}
        content={origin.name || 'Unknown'}
      />
      <RowWithLink
        title="Location"
        url={`/locations/?id=${location.id}`}
        content={location.name || 'Unknown'}
      />


      <FlexRow padding="1rem" flexDirection="column">
        <p>Starred in</p>
        <ListContainer>
          {episode?.map((episode) => (
            <Link key={episode.id} href={`/episodes/${episode.id}`}>
              <a>
                <span>#{episode.id} </span>
                <span>{episode.name} </span>
              </a>
            </Link>
          ))} 
        </ListContainer>
      </FlexRow>

    </div>
  )
}

export default ExpandedCardText
