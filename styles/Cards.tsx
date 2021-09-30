import styled from 'styled-components'

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

export const EpisodeCard = styled.div`
	width: 100%;
	margin: 1rem;
	min-height: 10vh;
	border: 1px solid #d3d3d3;
	border-radius: 2px;
	padding: 1rem;
	position: relative;
	display: flex;
	> div {
		width: 25%;
	}
`

export const TitleText = styled.p`
	font-weight: 600;
`

export const DetailText = styled.p`
	color: #636363;
`


export const EpisodeIdText = styled.span`
	font-size: 4rem;
	z-index: -1;
	position: absolute;
	right: 2rem;
	bottom: 1rem;
	color: #d3d3d3;
`