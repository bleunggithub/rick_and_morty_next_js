import { BriefList, Collection, Info } from "."
import { BriefEpisodeList } from "./episodes"
import { BriefLocationList } from "./locations"

export interface CharactersDetails {
	characters: Characters
}
export interface CharacterDetails {
	character: Character
}

export interface Characters {
	info: Info
	results: Character[]
}

export interface Character extends BriefList {
	image: string
	status: CharacterStatus
	species?: string
	gender?: string
	origin?: BriefLocationList
	location?: BriefLocationList
	episodes?: BriefEpisodeList
}

export type CharacterStatus = "Alive" | "Dead" | "unknown"

export const CharacterStatusColorMap: Collection<CharacterStatus, string> = {
	Alive: "#9DC743",
	Dead: "#C44745",
	unknown: "#6E8785",
}
