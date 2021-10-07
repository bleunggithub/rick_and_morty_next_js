import { Character, CharacterDetails } from "../interface/characters"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { 
  ExpandedCharacterCardRoot, 
  ExpandedCharacterCardContainer, 
  CrossIconContainer 
} from '../styles/Cards'
import CrossIcon from "./icons/CrossIcon"
import { FlexRow } from "../styles/BaseElements"
import Loader from './Loader'
import ExpandedCardImage from './ExpandedCardImage'
import ExpandedCardText from './ExpandedCardText'
import { ExpandedCardProps } from "../interface"
import { Location, LocationDetails } from "../interface/locations"
import { GET_LOCATION } from "../GraphQL/locations"


const ExpandedLocationCard = ({ 
  activeId, 
  activeCardData, 
  onClick
}: ExpandedCardProps<Location>) => {
  const [error, setError] = useState<null | string>(null)

  const { loading, data } = useQuery<LocationDetails>(
    GET_LOCATION, {
      skip: !!activeCardData,
      notifyOnNetworkStatusChange: true, 
      variables: {
        id: activeId
      },
      onError: err => setError(err.message)
    })

  const cardData = activeCardData || data?.location

  return (
    <ExpandedCharacterCardRoot>
      <ExpandedCharacterCardContainer
        layoutId={activeCardData?.id || ""}
        >
        <FlexRow flexDirection="column">
          <CrossIconContainer>
            <CrossIcon onClick={() => onClick('/locations', null, null)}/>
          </CrossIconContainer>
          { loading && (
            <FlexRow justifyContent="center" alignItems="center" margin="10vh auto">
              <Loader />
            </FlexRow>)
          }
          { error && (<span>An error has occurred: {error}</span>)}
          { cardData && (
            <>
              {/* <ExpandedCardText
                id={cardData.id}
                name={cardData.name}
                gender={cardData.type}
                species={cardData.dimension}
                status={cardData.status}
                origin={cardData.origin}
                location={cardData.location}
                episode={cardData.episode}
              /> */}
            </>
          )}
        </FlexRow>
      </ExpandedCharacterCardContainer>
    </ExpandedCharacterCardRoot>
  )
}

export default ExpandedLocationCard
