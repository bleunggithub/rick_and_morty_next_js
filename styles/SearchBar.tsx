import styled from "styled-components"
import { bgColor, border, bp } from "./variables"

export const SearchBarRoot = styled.div`
  display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	min-width: 30vw;

	& > h1 {
		width: 100%;
		letter-spacing: 4px;
		text-transform: uppercase;
		margin-bottom: 0;
	}
`

export const SearchBarForm = styled.form`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	height: 2rem;

	& > input {
		height: 2rem;
		width: 55%;
		border: 1px solid #fff;
		border-radius: 0 ${border.radius} ${border.radius} 0;
		padding: 0 10px;
	}

	@media (min-width: ${bp.sm}){
		flex-wrap: nowrap;

		& > input {
			border-radius: 0;
		}
	}
`

export const SearchButton = styled.button`
	font-size: 0.8rem;
  height: 2rem;
	border: 1px solid #fff;
	border-radius: ${border.radius};
	background-color: transparent;
	cursor: pointer;
	letter-spacing: 1px;
	text-transform: uppercase;
	margin-top: 1rem;

	@media (min-width: ${bp.sm}){
		margin-top: 0;
		border-radius: 0 ${border.radius} ${border.radius} 0;
	}
`

//!
export const StatusText = styled.p`
	text-align: center;
`
//!
export const SearchResultsRoot = styled.div`
	display: flex;
	padding: 1rem;
`