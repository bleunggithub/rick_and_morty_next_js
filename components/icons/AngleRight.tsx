interface AngleRightProp {
  height?: string
  fill?: string
}

function AngleRight({
  height = "1rem", 
  fill = "#ffffff99"
}: AngleRightProp) {
  return (
    <svg viewBox="0 0 141.73 141.73" height={height}>
      <path
        d="M105.76 70.87a3 3 0 00-1-2.09L58.27 26.47a3.35 3.35 0 00-4.59 0l-5 4.54a2.67 2.67 0 000 4.17L87.9 70.87l-39.21 35.68a3 3 0 00-1 2.09 3 3 0 001 2.09l5 4.54a3.38 3.38 0 004.59 0L104.76 73a3 3 0 001-2.13z"
        fill={fill}
        data-name="\u5716\u5C64 2"
      />
    </svg>
  )
}

export default AngleRight