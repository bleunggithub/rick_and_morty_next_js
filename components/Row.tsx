import { FlexRow } from "../styles/BaseElements"
import { AlignRightText } from '../styles/Cards'

interface RowProps {
  title?: string
  content: string
}

const Row = ({ title, content }: RowProps) => {
  return (
    <FlexRow padding={!title ? "1rem": "0 1rem"}>
      {
        !title ? (
          <p>#{content}</p>
        ):(
          <>
            <span>{title}</span>
            <AlignRightText>{content}</AlignRightText>
          </>
        )
      }
    </FlexRow>
  )
}

export default Row