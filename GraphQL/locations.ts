import { gql } from "@apollo/client"

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
					image
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
					image
				}
			}
		}
	}
`
