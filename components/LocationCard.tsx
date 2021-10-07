import { Location } from "../interface/locations"
import { FlexRow } from '../styles/BaseElements'
import { LocationCard, CardNameText, TitleText, DetailText } from '../styles/Cards'
import AvatarCarousel from './AvatarCarousel'

interface LocationCardSingleProps {
  locationData: Location
  onClick: React.MouseEventHandler
}

const LocationCardSingle = ({locationData, onClick}: LocationCardSingleProps) => {
  return (
    <LocationCard
      key={locationData.id}
      layoutId={`lo-${locationData.id}`}
      >
        <FlexRow margin="0 0 1rem 0">
            <a onClick={onClick}>
              <CardNameText>#{locationData.id} {locationData.name}</CardNameText>
            </a>
        </FlexRow>

        <FlexRow margin="0 0 0.8rem 0">
          <TitleText>Type</TitleText>
          <DetailText>{locationData.type}</DetailText>
        </FlexRow>

        <FlexRow margin="0 0 0.8rem 0">
          <TitleText>Dimension</TitleText>
          <DetailText>{locationData.dimension}</DetailText>
        </FlexRow>
        
        <TitleText fullWidth>Residents</TitleText>
        <AvatarCarousel characters={locationData.residents} />

    </LocationCard>
  )
}

export default LocationCardSingle
