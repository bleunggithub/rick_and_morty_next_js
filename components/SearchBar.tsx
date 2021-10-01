import { SearchBarRoot, SearchBarForm, SearchButton } from '../styles/SearchBar'
import SelectMenu from './SelectMenu'
import useSearch from './hooks/useSearch'

const SearchBar = () => {
  const {handleSearch, searchInput, handleInputChange, searchType, setSearchType} = useSearch()

  return (
    <>
      <SearchBarRoot>
          <SearchBarForm onSubmit={handleSearch}>
            <SelectMenu 
              searchType={searchType}
              setSearchType={setSearchType}
            />
            <input
              placeholder="Search by name"
              type="search"
              name="searchInput"
              value={searchInput}
              onChange={handleInputChange}
            /> 
            <SearchButton>Search</SearchButton>
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
