import styled, {css} from 'styled-components'
import { motion } from 'framer-motion'
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

export const AvatarCardRoot = styled.div`
	width: 100px;
	border-radius: 2px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media (min-width: ${bp.md}){
		margin: 1rem 2rem;
	}
`

export const NameOverlay = styled.div`
  position: absolute;
	background-color: rgba(0, 0, 0, 0.3);
	width: 100px;
	height: 100px;
	border-radius: 50% 0;
	right: 0px;
	bottom: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	transition: all 0.3s ease-in-out;
	
	> span {
		text-shadow: 2px 2px 2px #ffffff83;
	}

	:hover {
		background-color: rgba(0, 0, 0, 0.7);
	}
`
/////////////////////////////////////////////////////////////////
export const EpisodeCard = styled.div`
	width: 100%;
	padding: 1.5rem;
	position: relative;
	display: flex;
	flex-direction: column;
	transition: all 0.6s ease-in-out;
	border-radius: 2px;
	background-color: #0000002a;

	:hover{
		background-color: #0000007f;
	}
	
	@media (min-width: ${bp.lg}){
		width: 30%;
	}
`

export const CardNameText = styled(OutlineText)`
	cursor: pointer;
	font-size: 1.7rem;
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
	margin-right: 1rem;
`

export const DetailText = styled.p`
	color: #ffffffad;
	text-align: right;
`

export const StatusContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1.5rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	
	>button {
		padding: 0.5rem;
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		width: 100%;
	}
`
/////////////////////////////////////////////////////////////////


export const IdCardsContainer = styled(motion.ul)`
  width: 100%;
  margin-top: 0;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  column-gap: 2rem;
  row-gap: 2rem;
    
  @media (min-width: ${bp.md}){
    padding: 1rem 5rem;
  }
`

export const CharacterCard = styled(motion.li)`
  display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	cursor: pointer;
  border-radius: 2px;
  width: 100%;
  background-color: #0000002a;
  min-height: 45vh;
  position: relative;
	
  @media (min-width: ${bp.md}){
    width: 20%;
	  min-height: 20vh;
  }
`
export const CharacterImageContainer = styled(motion.div)`
	width: 100%;
	height: 300px;
	position: relative;
	
	@media (min-width: ${bp.md}){
		height: 230px;
  }
`
export const CharacterTextContainer = styled.div`
	width: 100%;
	padding: 1rem;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	column-gap: 1rem;
`

export const ExpandedCharacterCardRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: #000000c4;
	width: 90vw;
	height: 100vh;
	
  @media (min-width: ${bp.xxs}){
    height: 80vh;
  }
	
  @media (min-width: ${bp.xl}){
    width: 60vw;
  }
	
	>div>div {
			@media (min-width: ${bp.md}){
				height: 80vh;
				display: flex;
				flex-wrap: nowrap;
				flex-direction: row;
				align-items: center;
			}
			>div:last-child{
				width: 100%;
				@media (min-width: ${bp.md}){
					width: 40%;
				}
			}
		}

`

export const CrossIconContainer = styled.div`
	position: absolute;
	right: 1rem;
	top: 1rem;
	z-index: 2;
`
export const HorizontalCharacterImageContainer = styled(CharacterImageContainer)`
  @media (max-width: ${bp.xxs}){
    height: 45vh;
  }

	@media (min-width: ${bp.md}){
    height: 80vh;
		width: 60%;
  }
`

export const AlignRightText = styled.p`
	margin-left: 1rem;
	text-align: right;
	text-transform: capitalize;
`

export const ListContainer = styled.div<{height?: string}>`
	background-color: #00000053;
	width: 100%;
	height: ${props => props.height || '15vh'};
	overflow: auto;
	margin-top: 10px;
	padding: 1rem;

	>a {
		display: block;
		width: 100%;
		margin-bottom: 0.5rem;
	}

  @media (min-width: ${bp.md}){
		height: ${props => props.height || '35vh'};
	}
`

export const ExpandedCharacterCardContainer = styled(motion.div)`
  border-radius: 10px;
  width: 100vw;
  height: 300px;
`
////////////////////////////////////////////////////////////////
export const LocationCard = styled(motion.li)`
  display: flex;
	flex-direction: column;
	flex-wrap: wrap;
  border-radius: 2px;
  width: 100%;
  background-color: #0000002a;
  min-height: 30vh;
	padding: 1rem;
  position: relative;
	
  @media (min-width: ${bp.md}){
		min-height: 30vh;
    width: 30%;
	}

  @media (min-width: ${bp.xl}){
    width: 30%;
	  min-height: 45vh;
  }
`


export const ExpandedLocationCardRoot = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: #000000c4;
	width: 90vw;
	height: 50vh;
	z-index: 5;
	
  @media (min-width: ${bp.xxs}){
    height: 40vh;
  }
	
  @media (min-width: ${bp.md}){
		height: 30vh;
    width: 40vw;
  }
  @media (min-width: ${bp.xl}){
		height: 40vh;
    width: 40vw;
  }
	
`

