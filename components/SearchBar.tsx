import styles from '../styles/SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={styles.searchBarRoot}>
      <input
        className={styles.searchInput} 
        placeholder="Enter an episode ID"
        type="search"
      /> 
    </div>
  )
}

export default SearchBar
