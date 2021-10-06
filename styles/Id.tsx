import styled from 'styled-components'
import { OutlineText } from './BaseElements'
import { bp } from './variables'

export const IdContentContainer = styled.div`
  width: 100%;
  position: relative;
  top: -230px;
  padding: 1rem;

	@media (min-width: ${bp.lg}){
		padding: 0 5rem;
	}
`

export const IdTextContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  margin-bottom: -25vh;
  background-color: #0000007f;
  padding: 3rem 1rem;
`

export const TitleText = styled(OutlineText)`
  font-size: 2rem;

  @media (min-width: ${bp.xxs}){
    font-size: 2.5rem;
  }
`

export const DetailText = styled.div`
  margin: 2rem 1rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${bp.lg}){
    width: 30%;
  }
`

export const AvatarCardsContainer = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	row-gap: 1rem;
`
