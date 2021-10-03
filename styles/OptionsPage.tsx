import styled from "styled-components"
import { bgColor, padding, margin, bp } from "./variables"
import { motion } from "framer-motion"

export const PageHomeRoot = styled.div`
  width: 100%;
  min-height: 100vh;
	overflow: auto;
	display: flex;
	flex-wrap: wrap;
	
  @media (min-width: ${bp.lg}){
		padding: ${padding.bottom} ${padding.lgSide};
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

//!
export const CharactersHomeRoot = styled(PageHomeRoot)`
	background-color: ${bgColor.medium};
`
//!
export const LocationsHomeRoot = styled(PageHomeRoot)`
	background-color: ${bgColor.dark};
`
///////////////////////////////////////////////////////////////////////
export const EpisodesHomeMainContentContainer = styled(motion.main)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: ${margin.navbar};
	row-gap: 1rem;
	
	> p {
		padding-left: 2rem;
		margin-bottom: 1rem;
		letter-spacing: 3px;
		font-size: 3rem;
		width: 100%;
	}
`