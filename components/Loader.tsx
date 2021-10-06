import Image from 'next/image'
import portal from '../public/portal.png'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  100% { transform: rotate(360deg) }
`
const LoaderRoot = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  -webkit-animation: 4s ${spin} linear infinite;
  -moz-animation: 4s ${spin} linear infinite;
  animation: 4s ${spin} linear infinite;
`


const Loader = () => {
  return (
    <>
      <LoaderRoot>
        <Image src={portal} layout="fill" objectFit="scale-down" objectPosition="center center"/>
      </LoaderRoot>
    </>
  )
}

export default Loader
