export interface EpisodesDetails {
	episodes: Episodes
}

export interface EpisodeDetails {
	episode: Episode
}

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
	air_date: string
	created: string
	characters: Character[]
}

export interface Character {
	id: string
	name: string
	status?: string
	species?: string
	gender?: string
	image?: string
}
