import Image from "next/image"
import { CharacterCard, CharacterImageContainer, CharacterTextContainer } from '../styles/Cards'
import { OutlineText } from "../styles/BaseElements"
import { Character, CharacterStatusColorMap } from "../interface/characters"
import { StatusBadge } from "../styles/Avatars"

interface CharacterCardSingleProps {
  characterData: Character
  onClick: () => void
}

const CharacterCardSingle = ({characterData, onClick}:CharacterCardSingleProps) => {
  return (
    <CharacterCard
      key={characterData.id}
      layoutId={`ch-${characterData.id}`}
      onClick={onClick}
      >
      <CharacterImageContainer>
        <Image
          src={characterData.image} 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center center" 
        />
      </CharacterImageContainer>
      <CharacterTextContainer>
        <OutlineText fontSize="1.5rem">#{characterData.id} </OutlineText>
        <p>{characterData.name}</p>
      </CharacterTextContainer>
        <StatusBadge 
          color={CharacterStatusColorMap[characterData.status] || '#6E8785'}
          right="10px"
          bottom="10px"
        />
    </CharacterCard>
  )
}

export default CharacterCardSingle
