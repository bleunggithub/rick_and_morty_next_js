import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AvatarContainer = styled(motion.div)`
  position: relative;
`

export const AvatarImage = styled(Image)`
  border-radius: 50% 0;
`

export const StatusBadge = styled.div<{color: string, bottom?: string, right?:string }>`
  width: 1rem;
  height: 1rem;
  background-color: ${props => props.color};
  position: absolute;
  border: 1px solid #ffffffa7;
  border-radius: 50%;
  bottom: ${props => props.bottom ? props.bottom : 0};
  right: ${props => props.right ? props.right : 0};
`

export const NameContainer = styled.div`
  height: 1rem;
  margin: 5px 0;
`
