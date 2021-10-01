import { CharacterStatus } from "./characters"

export interface EpisodesDetails {
	episodes: Episodes
}

export interface EpisodeDetails {
	episode: Episode
}
// export interface EpisodesByIdsDetails {
// 	episodesByIds: Episode[]
// }

export interface Episodes {
	info: {
		count: number
		next: number | null
		pages: number
		prev: number | null
	}
	results: Episode[]
}

export interface Episode {
	id: string
	name: string
	episode: string
	air_date: string
	characters: Character[]
}

export interface Character {
	id: string
	name: string
	image: string
	status: CharacterStatus
	species?: string
	gender?: string
}

export type Routes = "episodes" | "characters" | "locations"
