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
	/* width: 45%; */
	width: 100%;
	margin: 1rem;
	min-height: 10vh;
	padding: 1rem;
	position: relative;
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	@media (min-width: ${bp.lg}){
		width: 45%;
	}
`

export const EpisodeNameText = styled(OutlineText)`
	font-size: 2rem;
	cursor: pointer;
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


export const EpisodeIdOutlineText = styled(OutlineText)`
	font-size: 4rem;
	z-index: 1;
	position: absolute;
	right: 2rem;
	bottom: 1rem;
`