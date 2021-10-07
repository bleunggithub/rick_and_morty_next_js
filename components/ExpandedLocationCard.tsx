import { useState } from "react"
import { useQuery } from "@apollo/client"
import Link from "next/link"
import { 
  ExpandedLocationCardRoot, 
  CrossIconContainer, 
  AlignRightText,
  ListContainer
} from '../styles/Cards'
import CrossIcon from "./icons/CrossIcon"
import { FlexRow } from "../styles/BaseElements"
import Loader from './Loader'
import { ExpandedCardProps } from "../interface"
import { Location, LocationDetails } from "../interface/locations"
import { GET_LOCATION } from "../GraphQL/locations"
import AvatarCarousel from "./AvatarCarousel"


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
    <ExpandedLocationCardRoot layoutId={`lo-${activeCardData?.id}` || ""}>
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
              <FlexRow padding="1rem">
                <p>#{cardData.id} {cardData.name}</p>  
              </FlexRow>
              <FlexRow padding="0 1rem">
                <span>Name</span>
                <AlignRightText>{cardData.name}</AlignRightText>  
              </FlexRow>
              <FlexRow padding="0 1rem">
                <span>Type</span>
                <AlignRightText>{cardData.type}</AlignRightText>  
              </FlexRow>
              <FlexRow padding="0 1rem">
                <span>Dimension</span>
                <AlignRightText>{cardData.dimension}</AlignRightText>  
              </FlexRow>
              <FlexRow padding="1rem" flexDirection="column">
                <p>Residents</p>
                  <AvatarCarousel characters={cardData.residents} />
              </FlexRow>
            </>
          )}
        </FlexRow>
    </ExpandedLocationCardRoot>
  )
}

export default ExpandedLocationCard
