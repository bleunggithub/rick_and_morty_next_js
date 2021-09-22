import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_EPISODE_BY_ID } from '../GraphQL/Queries'
import { Episode, EpisodeDetails } from '../interface'
import styles from '../styles/SearchBar.module.scss'
import EpisodeInfoCardList from './EpisodeInfoCardList'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [searchResults, setSearchResults] = useState<null | Episode[]>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const [searchById, {loading, data: episodeDetails}] = useLazyQuery<EpisodeDetails>(GET_EPISODE_BY_ID, {
    fetchPolicy: "cache-first",
    nextFetchPolicy: "cache-first",
    onError: err => {
      setSearchResults(null)
      setError(err.message)
    }
  })

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    searchById({
      variables: {
        id: searchInput
      },
    })

    setSearchInput("")
  }

  useEffect(()=>{
    episodeDetails?.episode && (setSearchResults([episodeDetails?.episode]))
  }, [episodeDetails])

  return (
    <>
    <div className={styles.searchBarRoot}>
      <form className={styles.searchBarForm} onSubmit={handleSearch}>
        <input
          placeholder="Enter an episode ID"
          type="search"
          name="searchInput"
          value={searchInput}
          onChange={handleInputChange}
        /> 
        <button>Search</button>
      </form>
    </div>
    {loading && (<p className={styles.statusText}>Loading search results...</p>)}
    {error && (<p className={styles.statusText}>An error has occurred: {error}</p>)}
    {searchResults && (
      <div className={styles.searchResultsRoot}>
        <h3>Search Results</h3>
        <EpisodeInfoCardList episodeInfo={searchResults} />
      </div>
    )}
    </>
  )
}

export default SearchBar
