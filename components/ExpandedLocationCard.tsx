import { useState } from "react"
import { useQuery } from "@apollo/client"
import { 
  ExpandedLocationCardRoot, 
  CrossIconContainer, 
} from '../styles/Cards'
import CrossIcon from "./icons/CrossIcon"
import { FlexRow } from "../styles/BaseElements"
import Loader from './Loader'
import { ExpandedCardProps } from "../interface"
import { Location, LocationDetails } from "../interface/locations"
import { GET_LOCATION } from "../GraphQL/locations"
import AvatarCarousel from "./AvatarCarousel"
import Row from './Row'


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
              <Row content={`${cardData.id} ${cardData.name}`} />
              <Row title="Type" content={cardData.type} />
              <Row title="Dimension" content={cardData.dimension} />
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
