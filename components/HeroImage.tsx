import { useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import hero1 from '../public/hero1.png'
import hero2 from '../public/hero2.jpg'
import hero3 from '../public/hero3.png'
import hero4 from '../public/hero4.png'
import { HeroImageContainer, HeroText } from '../styles/HeroImage'

interface HeroImageProps {
  home?: boolean
}

const images = [hero1, hero2, hero3, hero4]

const getRandomImage = () => {
  const min = 0
  const max = images.length
  return Math.floor(Math.random() * (max - min))
}

export const HeroImage = ({home}: HeroImageProps) => {
  

  const { scrollY } = useViewportScroll()

  const filter = useTransform(
    scrollY,
    [0, 300],
    ["grayscale(0%)", "grayscale(50%)"]
  );

  return (
    <>
      <HeroImageContainer style={{filter}}>
        <Image 
          src={images[home ? 0 : getRandomImage()]} 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center center"
        />
      </HeroImageContainer>
      <HeroText>{home && <> Rick & Morty<br />Adventures</>}</HeroText>
    </>
  )
}
