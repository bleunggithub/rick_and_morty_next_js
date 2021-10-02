import styled, { css } from 'styled-components'

export const Select = styled.div`
  width: 40%;
  height: 2rem;
  padding: 0 1rem;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 2px 0 0 2px;
`

export const LabelContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`

export const CapitalisedLabel = styled.p<{hover?:boolean}>`
  height: 2rem;
  letter-spacing: 1px;
  font-size: 0.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;

  ${props => props.hover && css`
    :hover {
      font-weight: 800;
    }
  `}
`

export const DropDownIcon = styled.span`
  font-size: 0.6rem;
  margin-left: 0.5rem;
`