import { Character, CharacterDetails } from "../interface/characters"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { ExpandedCharacterCardRoot, ExpandedCharacterCardContainer, CrossIconContainer, HorizontalCharacterImageContainer, AlignRightText, EpisodeListContainer } from '../styles/Cards'
import { GET_CHARACTER } from "../GraphQL/characters"
import CrossIcon from "./icons/CrossIcon"
import { FlexRow } from "../styles/BaseElements"
import Image from "next/image"
import Link from "next/link"
import Loader from './Loader'
import ExpandedCardImage from './ExpandedCardImage'
import ExpandedCardText from './ExpandedCardText'
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

  const { loading, data } = useQuery<CharacterDetails>(
    GET_CHARACTER, {
      skip: !!activeCardData,
      notifyOnNetworkStatusChange: true, 
      variables: {
        id: activeId
      },
      onError: err => setError(err.message)
    })

  const cardData = activeCardData || data?.character

  return (
    <ExpandedCharacterCardRoot>
      <ExpandedCharacterCardContainer
        layoutId={activeCardData?.id || ""}
        >
        <FlexRow flexDirection="column">
          <CrossIconContainer>
            <CrossIcon onClick={() => onClick('/characters', null, null)}/>
          </CrossIconContainer>
          { loading && (
            <FlexRow justifyContent="center" alignItems="center" margin="10vh auto">
              <Loader />
            </FlexRow>)
          }
          { error && (<span>An error has occurred: {error}</span>)}
          { cardData && (
            <>
              <ExpandedCardImage
                id={cardData.id}
                image={cardData.image}
              />
              <ExpandedCardText
                id={cardData.id}
                name={cardData.name}
                gender={cardData.gender}
                species={cardData.species}
                status={cardData.status}
                origin={cardData.origin}
                location={cardData.location}
                episode={cardData.episode}
              />
            </>
          )}
        </FlexRow>
      </ExpandedCharacterCardContainer>
    </ExpandedCharacterCardRoot>
  )
}

export default ExpandedCharacterCard
