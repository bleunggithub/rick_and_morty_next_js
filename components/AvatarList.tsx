import Link from 'next/link'
import { useState } from 'react'
import { FlexRow } from '../styles/BaseElements'
import { AvatarContainer, AvatarImage, StatusBadge, NameContainer } from '../styles/Avatars'
import { Character, CharacterStatusColorMap } from '../interface/characters'

interface AvatarListProps {
  characters: Character[]
}

const AvatarList = ({characters}: AvatarListProps) => {
  const [name, setName] = useState('')

  const handleDisplayName = (name: string) => {
    setName(name)
  }

  return (
    <>
      <FlexRow margin="0.8rem 0 0 0">
        {
          characters.map((ch)=>(
            <AvatarContainer 
              key={ch.id}
              whileHover={{scale: 1.1}} 
              onMouseEnter={()=>handleDisplayName(ch.name)}
              onMouseLeave={()=>handleDisplayName('')}
              >
              <Link href={`/characters/?id=${ch.id}`} passHref scroll={false}>
                <a><AvatarImage src={ch.image} alt={ch.name} width={100} height={100} /></a>
              </Link>
              <StatusBadge color={CharacterStatusColorMap[ch.status] || '#6E8785'} />
            </AvatarContainer>
          ))
        }
      </FlexRow>
      <NameContainer>
        {name}
      </NameContainer>
     </>
  )
}

export default AvatarList
