interface AngleLeftProp {
  height?: string
  fill?: string
}

function AngleLeft({
  height = "1rem", 
  fill = "#ffffff99", 
}:AngleLeftProp) {
  return (
    <svg viewBox="0 0 141.73 141.73" height={height}>
      <path
        d="M42.83 73l46.49 42.32a3.38 3.38 0 004.59 0l5-4.54a3 3 0 001-2.09 3 3 0 00-1-2.09L59.69 70.87 98.9 35.18a2.67 2.67 0 000-4.17l-5-4.54a3.35 3.35 0 00-4.59 0L42.83 68.78a2.67 2.67 0 000 4.17z"
        fill={fill}
        data-name="\u5716\u5C64 2"
      />
    </svg>
  )
}

export default AngleLeft