import { gql } from "@apollo/client"

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
				episode {
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
			episode {
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
