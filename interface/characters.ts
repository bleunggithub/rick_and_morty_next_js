export type CharacterStatus = "Alive" | "Dead" | "unknown"

export type Collection<Keys extends string, Type> = {
	[Key in Keys]?: Type
}

export const CharacterStatusColorMap: Collection<CharacterStatus, string> = {
	Alive: "#9DC743",
	Dead: "#C44745",
	unknown: "#6E8785",
}
