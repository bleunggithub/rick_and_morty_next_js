import { useState } from "react"
import { SearchBarRoot, SearchBarForm, SearchButton } from '../styles/SearchBar'
import SelectMenu from './SelectMenu'
import { Query } from "../interface/queries"
import { useRouter } from "next/dist/client/router"

interface SearchBarProps {
  closeMenu: () => void
}

const SearchBar = ({ closeMenu }:SearchBarProps) => {
  const router = useRouter()

	const [searchInput, setSearchInput] = useState<string>("")
	const [searchType, setSearchType] = useState<Query>("episodes")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value)
	}

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!searchInput) return
    
    closeMenu()
    router.push(`/search?${searchType}=${searchInput}`)
    setSearchType("episodes")
		setSearchInput("")
  }

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
    </SearchBarRoot>
  )
}

export default SearchBar
