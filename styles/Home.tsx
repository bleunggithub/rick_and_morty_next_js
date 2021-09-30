import styled from 'styled-components'
import { bgColor, bp } from './variables'

export const HomeRoot = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const HomeContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
	overflow: hidden;

	> section {
		width: 100%;
		height: calc(100vh / 3);

		display: flex;
		padding: 2rem;
		align-items: center;
		> a {
			font-size: 2rem;
			text-transform: uppercase;
			&:hover {
				transition: all 0.5s;
				text-shadow: 0 0 3px rgba(255, 255, 255, 0.5),
					0 0 6px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5);
			}
		}
	}
	& section:first-child {
		background-color: ${bgColor.light};
	}
	& section:nth-child(2) {
		background-color: ${bgColor.medium};
	}
	& section:last-child {
		background-color: ${bgColor.dark};
	}

  @media (min-width: ${bp.lg}){
    flex-direction: row;
    flex-wrap: nowrap;
		> section {
			width: calc(100% / 3);
			min-height: 100vh;
			> a {
				font-size: 3.5rem;
			}
		}
	}

`