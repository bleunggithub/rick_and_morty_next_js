import { useState, useEffect } from "react"
import {
	ApolloError,
	useLazyQuery,
	WatchQueryFetchPolicy,
} from "@apollo/client"
import { Episodes, EpisodesDetails } from "../../interface/episodes"
import { Characters, CharactersDetails } from "../../interface/characters"
import { Locations, LocationsDetails } from "../../interface/locations"
import { Query } from "../../interface/queries"
import { SEARCH_EPISODES_BY_NAME } from "../../GraphQL/episodes"
import { SEARCH_CHARACTERS_BY_NAME } from "../../GraphQL/characters"
import { SEARCH_LOCATIONS_BY_NAME } from "../../GraphQL/locations"

const useSearch = (closeMenu: () => void) => {
	const [searchInput, setSearchInput] = useState<string>("")
	const [searchType, setSearchType] = useState<Query>("episodes")
	//! add load more pages options
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const [searchResults, setSearchResults] = useState<
		null | Episodes | Characters | Locations
	>(null)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value)
	}

	const fetchOptions = {
		fetchPolicy: "cache-first" as WatchQueryFetchPolicy,
		nextFetchPolicy: "cache-first" as WatchQueryFetchPolicy,
		onCompleted: (
			res: EpisodesDetails | CharactersDetails | LocationsDetails
		) => console.log(res),
		onError: (err: ApolloError) => {
			setSearchResults(null)
			setError(err.message)
		},
	}

	const [
		searchEpisodesByName,
		{ loading: episodesSearchLoading, data: episodesResults },
	] = useLazyQuery<EpisodesDetails>(SEARCH_EPISODES_BY_NAME, fetchOptions)

	const [
		searchCharactersByName,
		{ loading: charactersSearchLoading, data: charactersResults },
	] = useLazyQuery<CharactersDetails>(SEARCH_CHARACTERS_BY_NAME, fetchOptions)

	const [
		searchLocationsByName,
		{ loading: locationsSearchLoading, data: locationsResults },
	] = useLazyQuery<LocationsDetails>(SEARCH_LOCATIONS_BY_NAME, fetchOptions)

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setError(null)
		if (!searchInput) return

		if (searchType === "episodes") {
			searchEpisodesByName({
				variables: {
					page: 1,
					filter: {
						name: searchInput,
					},
				},
			})
		} else if (searchType === "characters") {
			searchCharactersByName({
				variables: {
					page: 1,
					filter: {
						name: searchInput,
					},
				},
			})
		} else {
			searchLocationsByName({
				variables: {
					page: 1,
					filter: {
						name: searchInput,
					},
				},
			})
		}

		setSearchInput("")
	}

	useEffect(() => {
		episodesSearchLoading || charactersSearchLoading || locationsSearchLoading
			? setIsLoading(true)
			: setIsLoading(false)
	}, [episodesSearchLoading, charactersSearchLoading])

	return {
		searchInput,
		searchType,
		error,
		searchResults,
		handleInputChange,
		setSearchType,
		isLoading,
		handleSearch,
	}
}

export default useSearch
