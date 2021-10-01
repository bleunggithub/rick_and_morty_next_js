import { useState, useEffect } from "react"
import { useLazyQuery } from "@apollo/client"
import { Episodes, EpisodesDetails } from "../../interface/episodes"
import { Characters, CharactersDetails } from "../../interface/characters"
import { Locations, LocationsDetails } from "../../interface/locations"
import { Query, QueryMap } from "../../interface/queries"

const useSearch = () => {
	const [searchInput, setSearchInput] = useState<string>("")
	const [searchType, setSearchType] = useState<Query>("episodes")
	const [error, setError] = useState<string | null>(null)

	const [searchResults, setSearchResults] = useState<
		null | Episodes | Characters | Locations
	>(null)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value)
	}

	const [searchByName, { loading, data: searchResultsFromApi }] = useLazyQuery<
		EpisodesDetails | CharactersDetails | LocationsDetails
	>(QueryMap[searchType]!, {
		fetchPolicy: "cache-first",
		nextFetchPolicy: "cache-first",
		onError: (err) => {
			setSearchResults(null)
			setError(err.message)
		},
	})

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setError(null)
		if (!searchInput) return

		searchByName({
			variables: {
				page: 1,
				filter: {
					name: searchInput,
				},
			},
		})

		setSearchInput("")
	}

	useEffect(() => {
		console.log(searchResultsFromApi)
	}, [searchResultsFromApi])

	return {
		searchInput,
		searchType,
		error,
		searchResults,
		handleInputChange,
		setSearchType,
		loading,
		handleSearch,
	}
}

export default useSearch
