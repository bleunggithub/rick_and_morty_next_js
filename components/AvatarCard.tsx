import Link from 'next/link'
import { AvatarImage, StatusBadge } from '../styles/Avatars'
import { Character, CharacterStatusColorMap } from '../interface/characters'
import { AvatarCardRoot, NameOverlay } from '../styles/Cards'
interface AvatarCardProps {
  character: Character
}

const AvatarCard = ({character}: AvatarCardProps) => {

  return (
    <AvatarCardRoot>
      <Link href={`/characters/?id=${character.id}`} passHref scroll={false}>
        <a>
          <AvatarImage src={character.image} alt={character.name} width={100} height={100} />
          <NameOverlay><span>{character.name}</span></NameOverlay>
        </a>
      </Link>
      <StatusBadge 
        color={CharacterStatusColorMap[character.status] || '#6E8785'} 
      />
    </AvatarCardRoot>
  )
}

export default AvatarCard
