import styled from "styled-components"
import { bgColor, padding, margin, bp } from "./variables"
import { motion } from "framer-motion"

const PageHomeRoot = styled.div`
  width: 100%;
  min-height: 100vh;
	overflow: auto;
	padding: 0 ${padding.appSide};
	background-color: ${bgColor.light};
	display: flex;
	flex-wrap: wrap;

  @media (min-width: ${bp.lg}){
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

  @media (min-width: ${bp.lg}){
		width: 30%;
		padding-top: 3rem;
  }
`

export const EpisodesHomeMainContent = styled(motion.main)`
	width: 100%;

  @media (min-width: ${bp.lg}){
		margin-top: ${margin.navbar};
		width: 70%;
  }
`