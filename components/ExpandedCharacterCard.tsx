import { Character, CharacterDetails } from "../interface/characters"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { ExpandedCharacterCardRoot, ExpandedCharacterCardContainer, CrossIconContainer, HorizontalCharacterImageContainer, AlignRightText, EpisodeListContainer } from '../styles/Cards'
import { GET_CHARACTER } from "../GraphQL/characters"
import CrossIcon from "./icons/CrossIcon"
import { FlexRow } from "../styles/BaseElements"
import Image from "next/image"
import Link from "next/link"

interface ExpandedCharacterCardProps {
  activeId: string | null
  activeCardData: Character | null
  onClick: (
    route: string, 
    cardData: Character | null, 
    id: string | null
  ) => void
}

const ExpandedCharacterCard = ({ 
  activeId, 
  activeCardData, 
  onClick
}: ExpandedCharacterCardProps) => {
  const [error, setError] = useState<null | string>(null)

  const { loading: singleCardLoading, data: singleCardData } = useQuery<CharacterDetails>(
    GET_CHARACTER, {
      skip: !!activeCardData,
      notifyOnNetworkStatusChange: true, 
      variables: {
        id: activeId
      },
      onError: err => setError(err.message)
    })

  const cardData = activeCardData || singleCardData?.character

  return (
    <ExpandedCharacterCardRoot>
      <ExpandedCharacterCardContainer
        layoutId={activeCardData?.id || ""}
      >
        <FlexRow flexDirection="column">
          <CrossIconContainer>
            <CrossIcon onClick={() => onClick('/characters', null, null)}/>
          </CrossIconContainer>
          {cardData && (
            <>
              <HorizontalCharacterImageContainer layoutId={`image-${cardData.id}`}>
                <Image 
                  src={cardData.image}
                  layout="fill" 
                  objectFit="cover" 
                  objectPosition="center center" 
                />
              </HorizontalCharacterImageContainer>
              <div>
              <FlexRow padding="1rem">
                <p>#{cardData.id} {cardData.name}</p>
              </FlexRow>
              <FlexRow padding="0 1rem">
                <span>Gender</span>
                <AlignRightText>{cardData.gender}</AlignRightText>
              </FlexRow>
              <FlexRow padding="0 1rem">
                <span>Species</span>
                <AlignRightText>{cardData.species}</AlignRightText>
              </FlexRow>
              <FlexRow padding="0 1rem">
                <span>Status</span>
                <AlignRightText>{cardData.status}</AlignRightText>
              </FlexRow>
              { 
                cardData.origin && (
                  <FlexRow padding="0 1rem">
                    <span>Origin</span>
                    <Link href={`/locations/${cardData.origin.id}`} passHref>
                      <a><AlignRightText>{cardData.origin?.name || 'Unknown'}</AlignRightText></a>
                    </Link>
                  </FlexRow>
              )}
              { 
                cardData.location && (
                  <FlexRow padding="0 1rem">
                    <span>Location</span>
                    <Link href={`/locations/${cardData.location.id}`} passHref>
                      <a><AlignRightText>{cardData.location?.name || 'Unknown'}</AlignRightText></a>
                    </Link>
                  </FlexRow>
              )}
              {
                cardData.episode && (
                  <FlexRow padding="1rem" flexDirection="column">
                  <p>Starred in</p>
                    <EpisodeListContainer>
                      {cardData.episode.map((episode) => (
                        <Link key={episode.id} href={`/episodes/${episode.id}`}>
                          <a>
                            <span>#{episode.id} </span>
                            <span>{episode.name} </span>
                          </a>
                        </Link>
                      ))} 
                    </EpisodeListContainer>
                  </FlexRow>
                )
              }
              </div>
            </>
          )}
        </FlexRow>
      </ExpandedCharacterCardContainer>
    </ExpandedCharacterCardRoot>
  )
}

export default ExpandedCharacterCard
