import styled from "styled-components"
import { bgColor, padding, margin, bp } from "./variables"
import { motion } from "framer-motion"

const PageHomeRoot = styled.div`
  width: 100%;
  min-height: 100vh;
	overflow: auto;
	background-color: ${bgColor.light};
	display: flex;
	flex-wrap: wrap;
	
  @media (min-width: ${bp.lg}){
		padding: 0 0 ${padding.bottom} ${padding.lgSide};
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

export const EpisodesHomeRoot = styled(PageHomeRoot)`
	background-color: ${bgColor.light};
`

export const CharactersHomeRoot = styled(PageHomeRoot)`
	background-color: ${bgColor.medium};
`

export const LocationsHomeRoot = styled(PageHomeRoot)`
	background-color: ${bgColor.dark};
`

export const EpisodesHomeSearchContainer = styled(motion.div)`
	width: 100%;
	margin-top: ${margin.navbar};
	padding: ${padding.smSide};

  @media (min-width: ${bp.lg}){
		width: 30%;
		padding-top: 3rem;
  }
`

export const EpisodesHomeMainContent = styled(motion.main)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	
  @media (min-width: ${bp.lg}){
		padding-left: ${padding.lgSide};
		margin-top: ${margin.navbar};
		width: 70%;
  }
`