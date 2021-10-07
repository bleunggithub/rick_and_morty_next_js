import Image from "next/image"
import { LocationCard, CharacterImageContainer, CharacterTextContainer } from '../styles/Cards'
import { OutlineText } from "../styles/BaseElements"
import { Location } from "../interface/locations"
import { FlexRow } from '../styles/BaseElements'
import Link from 'next/link'
import { EpisodeCard, CardNameText, TitleText, DetailText } from '../styles/Cards'
import AvatarCarousel from './AvatarCarousel'

interface LocationCardSingleProps {
  locationData: Location
}

const LocationCardSingle = ({locationData}: LocationCardSingleProps) => {
  return (
    <LocationCard
      key={locationData.id}
      layoutId={locationData.id}
      >
        <FlexRow margin="0 0 1rem 0">
          <Link href={`/locations?id=${locationData.id}`} shallow passHref scroll={false}>
            <a><CardNameText>#{locationData.id} {locationData.name}</CardNameText></a>
          </Link>
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
