import styled from 'styled-components'
import { bp, padding } from './variables'

export const HomeRoot = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const MainContentContainer = styled.div`
	padding: ${padding.navbar} ${padding.smX};

	@media (min-width: ${bp.lg}){
    padding: ${padding.navbar} ${padding.lgX};
	}

`