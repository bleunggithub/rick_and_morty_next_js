import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"
import { SEARCH_CHARACTERS_BY_NAME } from "../../GraphQL/characters"
import { SEARCH_EPISODES_BY_NAME } from "../../GraphQL/episodes"
import { SEARCH_LOCATIONS_BY_NAME } from "../../GraphQL/locations"
import { Collection } from "../../interface"
import { CharactersDetails } from "../../interface/characters"
import { EpisodesDetails } from "../../interface/episodes"
import { LocationsDetails } from "../../interface/locations"
import { Query } from "../../interface/queries"
import { searchFetchOptions } from "../../lib/apolloClient"

const useSearch = (
	searchType: Query,
	searchInput: string | string[] | undefined
) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const {
		fetchMore: episodesFetchMore,
		loading: episodesSearchLoading,
		data: episodesResults,
	} = useQuery<EpisodesDetails>(SEARCH_EPISODES_BY_NAME, {
		...searchFetchOptions(setError, searchInput),
		skip: searchType !== "episodes",
	})

	const {
		fetchMore: charactersFetchMore,
		loading: charactersSearchLoading,
		data: charactersResults,
	} = useQuery<CharactersDetails>(SEARCH_CHARACTERS_BY_NAME, {
		...searchFetchOptions(setError, searchInput),
		skip: searchType !== "characters",
	})

	const {
		fetchMore: locationsFetchMore,
		loading: locationsSearchLoading,
		data: locationsResults,
	} = useQuery<LocationsDetails>(SEARCH_LOCATIONS_BY_NAME, {
		...searchFetchOptions(setError, searchInput),
		skip: searchType !== "locations",
	})

	const next =
		episodesResults?.episodes?.info?.next ||
		charactersResults?.characters.info.next ||
		locationsResults?.locations.info.next

	const FetchMoreFnMap: Collection<Query, any> = {
		episodes: episodesFetchMore,
		characters: charactersFetchMore,
		locations: locationsFetchMore,
	}

	const handleLoadMore = (fetchMore: any) => {
		fetchMore({
			variables: {
				page: next,
			},
		})
	}

	const loadMore = () => handleLoadMore(FetchMoreFnMap[searchType])

	useEffect(() => {
		episodesSearchLoading || charactersSearchLoading || locationsSearchLoading
			? setIsLoading(true)
			: setIsLoading(false)
	}, [episodesSearchLoading, charactersSearchLoading, locationsSearchLoading])

	return {
		next,
		loadMore,
		isLoading,
		error,
		episodesResults,
		charactersResults,
		locationsResults,
	}
}

export default useSearch
