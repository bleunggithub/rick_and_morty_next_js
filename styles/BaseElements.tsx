import styled, {css} from "styled-components"

export const OutlineText = styled.span`
	-webkit-text-fill-color: #ffffff00;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: #fff;
	-webkit-touch-callout: none;
`

export const FlexRow = styled.div<{wrap?: string, margin?: string}>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: ${props => props.wrap || 'nowrap'};
  ${props => props.margin && css`
    margin: ${props.margin}
  `}
`