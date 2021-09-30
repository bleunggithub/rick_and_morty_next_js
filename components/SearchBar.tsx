import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { SEARCH_EPISODES_BY_NAME } from '../GraphQL/Queries'
import { Episode, EpisodesDetails } from '../interface'
import EpisodeInfoCard from './EpisodeInfoCard'
import { SearchBarRoot, SearchBarForm } from '../styles/SearchBar'


const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [searchResults, setSearchResults] = useState<null | Episode>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const [searchById, {loading, data: episodeDetails}] = useLazyQuery<EpisodesDetails>(SEARCH_EPISODES_BY_NAME, {
    fetchPolicy: "cache-first",
    nextFetchPolicy: "cache-first",
    onError: err => {
      setSearchResults(null)
      setError(err.message)
    }
  })

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    searchById({
      variables: {
        page: 1,
        filter: {
          name: searchInput
        }
      },
    })

    setSearchInput("")
  }

  useEffect(()=>{
    console.log(episodeDetails)
    // episodeDetails?.episodesByIds.length && (setSearchResults(episodeDetails.episodesByIds[0]))
  }, [episodeDetails])

  return (
    <>
      <SearchBarRoot>
        <SearchBarForm onSubmit={handleSearch}>
          <input
            placeholder="Search by episode name"
            type="search"
            name="searchInput"
            value={searchInput}
            onChange={handleInputChange}
          /> 
          <button>Search</button>
        </SearchBarForm>
      </SearchBarRoot>
    {/* {loading && (<p className={styles.statusText}>Loading search results...</p>)}
    {error && (<p className={styles.statusText}>An error has occurred: {error}</p>)}
    {searchResults && (
      <div className={styles.searchResultsRoot}>
        <h3>Search Results</h3>
        <EpisodeInfoCard episode={searchResults} />
      </div>
    )} */}
    </>
  )
}

export default SearchBar
