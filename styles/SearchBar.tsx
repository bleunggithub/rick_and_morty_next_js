import styled from "styled-components"
import { border } from "./variables"

export const SearchBarRoot = styled.div`
  display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;

	& > h1 {
		width: 100%;
		letter-spacing: 4px;
		text-transform: uppercase;
		margin-bottom: 0;
	}
`

export const SearchBarForm = styled.form`
	height: 4rem;
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: flex-start;

	& > input {
		height: 2rem;
		width: 80%;
		border: 1px solid #fff;
		border-radius: ${border.radius} 0 0 ${border.radius};
		padding: 0 10px;
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