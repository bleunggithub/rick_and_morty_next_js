import Link from 'next/link'
import { useState } from 'react'
import { Character, CharacterStatusColorMap } from "../interface/characters"
import AngleLeft from './icons/AngleLeft'
import AngleRight from './icons/AngleRight'
import { 
  AvatarContainer, 
  AvatarImage, 
  StatusBadge,
  CarouselRoot,
  CarouselContentContainer,
  CarouselContent,
  LeftButton,
  RightButton
 } from '../styles/Avatars'

interface AvatarCarouselProps {
  characters: Character[]
}
interface AvatarProps {
  character: Character
}

const Avatar = ({ character }: AvatarProps) => {
  return (
    <AvatarContainer 
      key={character.id}
      whileHover={{scale: 1.1}} 
    >
      <Link href={`/characters/?id=${character.id}`} passHref scroll={false}>
        <a><AvatarImage src={character.image} alt={character.name} width={100} height={100} /></a>
      </Link>
      <StatusBadge color={CharacterStatusColorMap[character.status] || '#6E8785'} />
    </AvatarContainer>
  )
}

const AvatarCarousel = ({ characters }: AvatarCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handlePrev = () => {
    currentIndex > 0 && setCurrentIndex(prev => prev - 1)
  }

  const handleNext = () => {
    currentIndex < (characters.length - 5) && setCurrentIndex(prev => prev + 1)
  }

  return (
    <CarouselRoot>
      { !characters.length && <span>No residents in this location.</span>}
      { currentIndex > 0 && (
        <LeftButton onClick={handlePrev}>
          <AngleLeft />
        </LeftButton>
      )}

      <CarouselContentContainer>
        <CarouselContent style={{transform: `translateX(-${currentIndex * 100 / 5}%)`}}>
          {characters.map((character)=>(
            <Avatar character={character}/>
          ))}
          {characters.length < 50 && new Array(50 - characters.length).map(()=>(
            <div>hi</div>
          ))}
        </CarouselContent>
      </CarouselContentContainer>

      {currentIndex < (characters.length - 5) && (
        <RightButton onClick={handleNext}>
          <AngleRight />
        </RightButton>
      )}
    </CarouselRoot>
  )
}

export default AvatarCarousel

