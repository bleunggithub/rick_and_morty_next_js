import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { bp } from './variables'

export const NavbarRoot = styled(motion.nav)`
	width: 100%;
	padding: 1rem;
	display: flex;
	align-items: flex-end;
	position: fixed;
	display: flex;
	justify-content: space-between;
	z-index: 10;

	transition: all 0.5s ease-in-out;
`

const NavItemContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 1rem;
	height: 2rem;
	width: 30vw;
	justify-content: center;

	> a {
		color: #ffffffb4;
		text-transform: uppercase;
		letter-spacing: 1px;
			:hover{
				color: #fff;
			}
	}
`

export const AppTitleContainer = styled(NavItemContainer)`
	justify-content: flex-start;
	cursor: pointer;
	width: 20vw;

	> h2 {
		text-transform: uppercase;
		letter-spacing: 1px;
		@media (max-width: ${bp.xxs}){
			font-size: 1.5rem;
		}
	}
`

export const AppLogoContainer = styled.div`
	width: 2rem;
	height: 2rem;
	position: relative;
`

//----------------- hamburger -----------------//

export const NavLinksContainer = styled(NavItemContainer)<{isOpen: boolean}>`
	display: flex;
	flex-direction: column;
	width: 100vw;
	text-align: center;
	padding: 1.25rem 0;
	transition: all 0.8s;

	${props => props.isOpen && css`
		position: absolute;
		background-color: #000;
		right: 0px;
		top: 0px;
		opacity: 1;
		min-height: 100vh;
		padding: 5rem 1rem;
		justify-content: center;

		>div{
			margin-bottom: 3rem;
		}

		>a {
			margin-top: 3rem;
			font-size: 3rem;
		}
	`}

	@media (max-width: ${bp.lg}){
		${props => !props.isOpen && css`
			position: absolute;
			opacity: 0;
			right: 0;
			top: -500%;
		`}
	}


	@media (min-width: ${bp.lg}){
		justify-content: flex-end;
		flex-wrap: nowrap;
		flex-direction: row;
		position: relative;
		opacity: 1;

		> div {
			margin-right: 2.5rem;
		}
	}

`

export const MenuButtonContainer = styled.div`
  margin: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

	@media (min-width: ${bp.lg}){
		display: none;
	}
`

export const Hamburger = styled.div<{isOpen: boolean}>`
  width: 30px;
  height: 1px;
  background-color: #fff;
  transition: all 0.5s ease-in-out;
	z-index: 30;
	margin-top: 1rem;

	::before,::after{
		content: "";
		position: absolute;
		width: 30px;
		height: 1px;
		background-color: #fff;
		transition: all 0.5s ease-in-out;
	}

	::before {
		transform: translateY(-10px);
	}

	::after {
		transform: translateY(10px);
	}

	${props => props.isOpen && css`
	  transform: translateX(-50px);
		background-color: #000;
		position: fixed;
		top: 20px;
		right: 25px;

		::before{
  		transform: rotate(45deg) translate(35px, -35px);
		}
		
		::after{
  		transform: rotate(-45deg) translate(35px, 35px);
		}
	`}
`