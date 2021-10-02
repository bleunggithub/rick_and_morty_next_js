import { SearchBarRoot, SearchBarForm, SearchButton } from '../styles/SearchBar'
import SelectMenu from './SelectMenu'
import useSearch from './hooks/useSearch'

const SearchBar = () => {
  const {handleSearch, searchInput, handleInputChange, searchType, setSearchType, isLoading} = useSearch()

  return (
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
      {isLoading && <p>Loading</p>}
    </SearchBarRoot>
  )
}

export default SearchBar
