import { Character, CharacterDetails } from "../interface/characters"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { 
  ExpandedCharacterCardRoot, 
  ExpandedCharacterCardContainer, 
  CrossIconContainer 
} from '../styles/Cards'
import { GET_CHARACTER } from "../GraphQL/characters"
import CrossIcon from "./icons/CrossIcon"
import { FlexRow } from "../styles/BaseElements"
import Loader from './Loader'
import ExpandedCardImage from './ExpandedCardImage'
import ExpandedCardText from './ExpandedCardText'
import { ExpandedCardProps } from "../interface"


const ExpandedCharacterCard = ({ 
  activeId, 
  activeCardData, 
  onClick
}: ExpandedCardProps<Character>) => {
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
        layoutId={`ch-${activeCardData?.id}` || ""}
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
