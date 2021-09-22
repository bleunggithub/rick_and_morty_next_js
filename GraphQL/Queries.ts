import { gql } from "@apollo/client"

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
	query getEpisodeById($id: ID!) {
		episode(id: $id) {
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
