import { gql } from "@apollo/client"

export const GET_EPISODES = gql`
	query getEpisodes($page: Int) {
		episodes(page: $page) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				air_date
				characters {
					id
					name
					status
				}
			}
		}
	}
`

export const GET_EPISODE = gql`
	query getEpisode($id: ID!) {
		episode(id: $id) {
			id
			name
			air_date
			characters {
				id
				name
				status
				species
				gender
				image
			}
		}
	}
`

export const SEARCH_EPISODES_BY_NAME = gql`
	query searchEpisodesByName($page: Int, $filter: FilterEpisode) {
		episodes(page: $page, filter: $filter) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				air_date
				characters {
					id
					name
					status
				}
			}
		}
	}
`

export const GET_CHARACTERS = gql`
	query getCharacters($page: Int) {
		characters(page: $page) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				image
				status
				species
				gender
				origin {
					id
					name
				}
				location {
					id
					name
				}
			}
		}
	}
`

export const GET_CHARACTER = gql`
	query getCharacter($id: ID!) {
		character(id: $id) {
			id
			name
			status
			species
			gender
			origin {
				id
				name
			}
			location {
				id
				name
			}
			episodes {
				id
				name
			}
		}
	}
`

export const SEARCH_CHARACTERS_BY_NAME = gql`
	query searchCharactersByName($page: Int, $filter: FilterCharacter) {
		characters(page: $page, filter: $filter) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				status
				species
				gender
				origin {
					id
					name
				}
				location {
					id
					name
				}
			}
		}
	}
`

export const GET_LOCATIONS = gql`
	query getLocations($page: Int) {
		locations(page: $page) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				type
				dimension
				residents {
					id
					name
					status
				}
			}
		}
	}
`

export const GET_LOCATION = gql`
	query getLocation($id: ID!) {
		location(id: $id) {
			id
			name
			type
			dimension
			residents {
				id
				name
				status
				species
				gender
				image
			}
		}
	}
`

export const SEARCH_LOCATIONS_BY_NAME = gql`
	query searchLocationsByName($page: Int, $filter: FilterLocation) {
		characters(page: $page, filter: $filter) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				type
				dimension
				residents {
					id
					name
					status
				}
			}
		}
	}
`

/////////////////////////////////////////////////////////////////////////////
export const GET_ALL_EPISODES = gql`
	query allEpisodes($page: Int) {
		episodes(page: $page) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				air_date
				created
				characters {
					id
					name
				}
			}
		}
	}
`

export const GET_EPISODE_BY_ID = gql`
	query getEpisodeById($ids: [ID!]!) {
		episodesByIds(ids: $ids) {
			id
			name
			air_date
			created
			characters {
				id
				name
				image
			}
		}
	}
`

export const GET_CHARACTER_DETAILS_BY_EPISODE_ID = gql`
	query getCharacterDetailsByEpisodeId($id: ID!) {
		episode(id: $id) {
			id
			name
			air_date
			created
			characters {
				id
				name
				status
				species
				gender
				image
			}
		}
	}
`

export const GET_EPISODES_WITH_CHARACTER_DETAILS = gql`
	query allEpisodes($page: Int) {
		episodes(page: $page) {
			results {
				id
				name
				air_date
				created
				characters {
					id
					name
					status
					species
					gender
					image
				}
			}
		}
	}
`
