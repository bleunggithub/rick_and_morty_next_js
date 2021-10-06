import { motion } from 'framer-motion'
import styled  from 'styled-components'
import { OutlineText } from './BaseElements'
import { bp } from './variables'

export const HeroImageContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 600px;
`

export const HeroText = styled(OutlineText)`
  position: absolute;
  font-size: 1.5rem;
  margin-top: 4rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 800;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 30px));

  @media (min-width: ${bp.md}){
    font-size: 4rem;
    transform: translate(-50%, calc(-50% - 230px));
  }

  @media (min-width: ${bp.lg}){
    font-size: 4rem;
    transform: translate(-50%, calc(-50% - 380px));
  }

  @media (min-width: ${bp.xl}){
    transform: translate(-50%, calc(-75%));
  }

`