import styled from "styled-components"
import { bgColor, padding, margin, bp } from "./variables"
import { motion } from "framer-motion"

export const PageHomeRoot = styled.div`
  width: 100%;
  min-height: 100vh;
	overflow: auto;
	/* background-color: ${bgColor.light}; */
	display: flex;
	flex-wrap: wrap;
	
  @media (min-width: ${bp.lg}){
		padding: 0 0 ${padding.bottom} ${padding.lgSide};
    flex-direction: row;
    flex-wrap: nowrap;
  }
`


export const CharactersHomeRoot = styled(PageHomeRoot)`
	background-color: ${bgColor.medium};
`

export const LocationsHomeRoot = styled(PageHomeRoot)`
	background-color: ${bgColor.dark};
`

export const EpisodesHomeMainContentContainer = styled(motion.main)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	
  @media (min-width: ${bp.lg}){
		padding: 0 ${padding.lgSide};
		margin-top: ${margin.navbar};
		width: 70%;
  }
`