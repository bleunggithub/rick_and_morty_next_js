import Image from "next/image"
import { Character } from "../interface/characters"
import { HorizontalCharacterImageContainer } from '../styles/Cards'

type ExpandedCardImageProps = Pick<Character, "id" | "image">

const ExpandedCardImage = ({id, image}: ExpandedCardImageProps) => {
  return (
    <HorizontalCharacterImageContainer layoutId={`image-${id}`}>
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
