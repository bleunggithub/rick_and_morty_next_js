import { Info, BriefList } from "."
import { Character } from "./characters"

export interface EpisodesDetails {
	episodes: Episodes
}
export interface EpisodeDetails {
	episode: Episode
}

export interface Episodes {
	info: Info
	results: Episode[]
}

export interface Episode extends BriefList {
	episode: string
	air_date: string
	characters: Character[]
}

export interface BriefEpisodeList extends BriefList {}
