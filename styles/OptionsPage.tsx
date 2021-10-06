import styled from "styled-components"
import { bgColor, padding, bp } from "./variables"
import { MainContentContainer } from "./BaseElements"
import { motion } from "framer-motion"

export const PageHomeRoot = styled.div`
  width: 100%;
	display: flex;
	flex-wrap: wrap;
	
  @media (min-width: ${bp.lg}){
		padding: ${padding.lgY} ${padding.lgX};
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

///////////////////////////////////////////////////////////////////////
export const OptionsMainContentContainer = styled(MainContentContainer)`
	padding: ${padding.navbar} ${padding.smX};
  
	@media (min-width: ${bp.xl}){
    padding: ${padding.lgY} ${padding.lgX};
  }
  `

///////////////////////////////////////////////////////////////////////
export const CharacterMainContentContainer = styled(MainContentContainer)`
  padding-bottom: 2rem;
`

export const CharacterTitleText = styled.p`
  margin-top: ${padding.navbar};
  padding-left: 2rem !important;
      
  @media (min-width: ${bp.lg}){
    padding-left: 4rem !important;
  }
`

export const ExpandedCardOverlay = styled(motion.div)`
  background: white;
  opacity: 0.2;
  position: fixed;
  width: 100%;
  height: 100vh;
  
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
