import { motion } from "framer-motion"
import styled, {css} from "styled-components"
import { bp } from "./variables"

export const OutlineText = styled.span<{fontSize?: string}>`
	-webkit-text-fill-color: #ffffff00;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: #fff;
	-webkit-touch-callout: none;
	font-size: ${props => props.fontSize || '1rem'};
`

export const FlexRow = styled.div<{
	wrap?: string, 
	margin?: string, 
	justifyContent?: string, 
	alignItems?: string,
	flexDirection?: string,
	padding?: string,
}>`
	width: 100%;
  display: flex;
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: ${props => props.alignItems || 'flex-start'};
	flex-direction: ${props => props.flexDirection || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};

  ${props => props.margin && css`
    margin: ${props.margin}
  `}
	
  ${props => props.padding && css`
    padding: ${props.padding}
  `}
`

export const MainContentContainer = styled(motion.main)`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	row-gap: 2rem;
	
	> p {
		padding-left: 1rem;
		margin-bottom: 1rem;
		letter-spacing: 3px;
		font-size: 3rem;
		width: 100%;
	}

	@media (min-width: ${bp.lg}){
    flex-direction: row;
		column-gap: 2rem;
		> p {
			padding-left: 2rem;
		}
  }


`