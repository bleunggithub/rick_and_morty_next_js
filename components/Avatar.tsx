import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { CharacterStatus, CharacterStatusColorMap } from '../interface/characters'

interface AvatarProps {
  id: string
  name: string
  image: string
  status: CharacterStatus
}

const AvatarContainer = styled.div`
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


const Avatar = ({id, name, image, status}: AvatarProps) => {
  return (
    <AvatarContainer>
      <Link href={`/characters/${id}`}>
        <AvatarImage src={image} alt={name} width={100} height={100} />
      </Link>
      <StatusBadge color={CharacterStatusColorMap[status] || '#6E8785'} />
     </AvatarContainer>
  )
}

export default Avatar
