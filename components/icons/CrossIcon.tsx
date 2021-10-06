import * as React from "react"

interface CrossIconProp {
  height?: string
	width?: string
	fill?: string
  onClick?: () => void
}

function CrossIcon({
  height = "1rem",
  width = "1rem",
  fill = "#fff",
  onClick
}: CrossIconProp) {


  return (
    <svg viewBox="0 0 141.73 141.73" height={height} width={width} onClick={onClick}>
      <g>
        <path
          className="Cancel_svg__cls-1"
          fill={fill}
          d="M123.52 139.21L3.06 18.54a7.25 7.25 0 010-10.24L8 3.36a7.42 7.42 0 0110.51 0l120.31 120.53a7.44 7.44 0 010 10.53l-4.82 4.79a7.43 7.43 0 01-10.48 0z"
        />
        <path
          className="Cancel_svg__cls-1"
          fill={fill}
          d="M139.53 19L19.2 139.59a7.32 7.32 0 01-10.35 0l-5.19-5.21a7.54 7.54 0 010-10.66L123.84 3.32a7.52 7.52 0 0110.64 0l5.05 5.06a7.54 7.54 0 010 10.62z"
        />
      </g>
    </svg>
  )

}

export default CrossIcon