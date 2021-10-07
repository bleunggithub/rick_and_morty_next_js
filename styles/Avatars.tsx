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

///////////////////////////////////////////////////////////////
// Carousel
export const CarouselRoot = styled.div`
  width: 100%;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
`
export const CarouselContentContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`
export const CarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  > * {
    flex: 0 0 20%;
  }
`
const NavigationButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`
export const LeftButton = styled(NavigationButton)`
  left: -1rem;
`
export const RightButton = styled(NavigationButton)`
  right: -1rem;
`