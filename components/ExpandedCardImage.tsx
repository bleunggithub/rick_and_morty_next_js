import Image from "next/image"
import { Character } from "../interface/characters"
import { HorizontalCharacterImageContainer } from '../styles/Cards'

type ExpandedCardImageProps = Pick<Character, "image">

const ExpandedCardImage = ({image}: ExpandedCardImageProps) => {
  return (
    <HorizontalCharacterImageContainer>
      <Image 
        src={image!}
        layout="fill" 
        objectFit="cover" 
        objectPosition="center center" 
      />
    </HorizontalCharacterImageContainer>
  )
}

export default ExpandedCardImage
