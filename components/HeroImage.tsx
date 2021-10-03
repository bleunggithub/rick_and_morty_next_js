import { useTransform, useViewportScroll, motion } from 'framer-motion'
import Image from 'next/image'
import styled  from 'styled-components'
import heroImage from '../public/hero.png'
import { OutlineText } from '../styles/BaseElements'
import { bp } from '../styles/variables'

const HeroImageContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 600px;
`
const HeroText = styled(OutlineText)`
  position: absolute;
  font-size: 2.7rem;
  margin-top: 4rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 800;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 30px));

  @media (min-width: ${bp.lg}){
    font-size: 4rem;
    transform: translate(-50%, calc(-50% - 280px));
  }

  @media (min-width: ${bp.xl}){
    font-size: 5rem;
    transform: translate(-50%, calc(-50%));
  }

`

export const HeroImage = () => {
  const { scrollY } = useViewportScroll()

  const filter = useTransform(
    scrollY,
    [0, 300],
    ["blur(0px)", "blur(3px)"]
  );
  

  return (
    <>
    <HeroImageContainer style={{filter}}>
      <Image src={heroImage} layout="fill" objectFit="cover" objectPosition="center center"/>
    </HeroImageContainer>
    <HeroText>Rick & Morty<br />Adventures</HeroText>
    </>
  )
}