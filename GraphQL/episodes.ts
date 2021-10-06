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
				episode
				air_date
				characters {
					id
					name
					status
					image
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
			episode
			air_date
			characters {
				id
				name
				status
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
				episode
				air_date
				characters {
					id
					name
					status
					image
				}
			}
		}
	}
`
