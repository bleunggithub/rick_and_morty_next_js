import styled from 'styled-components'
import { bp } from './variables'

export const NavbarRoot = styled.nav`
	height: 80px;
	width: 100%;
	padding: 1rem;
	background-color: transparent;
	display: flex;
	align-items: center;
	position: fixed;
	transition: all 0.5s;
	z-index: 10;

	> h2 {
		margin-left: 1rem;
		text-transform: uppercase;
		cursor: pointer;
    @media (max-width: ${bp.xxs}){
      font-size: 1.5rem;
    }
	}
`