import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'
import { FlexRow } from '../styles/BaseElements'
import { Character, CharacterStatusColorMap } from '../interface/characters'
import { motion } from 'framer-motion'

interface AvatarsProps {
  characters: Character[]
}

const AvatarContainer = styled(motion.div)`
  position: relative;
`

const AvatarImage = styled(Image)`
  border-radius: 50% 0;
  cursor: pointer;
`

const StatusBadge = styled.div<{color: string}>`
  width: 1rem;
  height: 1rem;
  background-color: ${props => props.color};
  position: absolute;
  border: 1px solid #ffffffa7;
  border-radius: 50%;
  bottom: 0;
  right: 0;
`

const NameContainer = styled.div`
  height: 1rem;
  margin: 5px 0;
`


const Avatars = ({characters}: AvatarsProps) => {
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
              <Link href={`/characters/${ch.id}`} passHref>
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

export default Avatars
