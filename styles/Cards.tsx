import styled, {css} from 'styled-components'
import { OutlineText } from './BaseElements'
import { bp } from './variables'

export const CardsContainer = styled.div`
  display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	padding: 1rem;

	& > p {
		width: 100%;
		text-align: center;
		margin-top: 1rem;
	}
`

export const CharacterCardRoot = styled.div`
	width: 30%;
	border: 1px solid #d3d3d3;
	border-radius: 2px;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const CharacterCardsContainer = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	row-gap: 1rem;
`
/////////////////////////////////////////////////////////////////
export const EpisodeCard = styled.div`
	width: 100%;
	margin: 1rem;
	min-height: 10vh;
	padding: 1.5rem;
	position: relative;
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #ffffff95;
	
	@media (min-width: ${bp.lg}){
		width: 40%;
	}
	`

export const EpisodeNameText = styled(OutlineText)`
	cursor: pointer;
	font-size: 2rem;
	letter-spacing: 2px;
	:hover {
		font-weight: 600;
	}
	`

export const TitleText = styled.p<{fullWidth?: boolean}>`
	font-weight: 600;
	letter-spacing: 2px;
	${props => props.fullWidth && css`
	width: 100%;
	`}
	`

export const DetailText = styled.p`
	color: #ffffffad;
	`
