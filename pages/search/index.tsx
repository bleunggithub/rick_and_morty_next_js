import { useRouter } from "next/dist/client/router"
import Loader from "../../components/Loader"
import { PopupMainContentContainer, OptionsMainContentContainer } from '../../styles/OptionsPage'
import { SearchResultsPageTitle } from '../../styles/SearchBar'
import { animationProps } from '../../animations/defaultValues'
import { contentVariants } from '../../animations/variants'
import { FlexRow } from "../../styles/BaseElements"
import { Query } from "../../interface/queries"
import useSearch from "../../components/hooks/useSearch"
import EpisodeCardList from "../../components/EpisodeCardList"
import PopupList from "../../components/PopupList"
import { StatusContainer } from "../../styles/Cards"
import LocationCardList from '../../components/LocationCardList'
import CharacterCardList from '../../components/CharacterCardList'
import ExpandedLocationCard from '../../components/ExpandedLocationCard'
import useCards from "../../components/hooks/useCards"
import { Location } from '../../interface/locations'
import { Character } from "../../interface/characters"

const SearchPage = () => {
  const router = useRouter()
  const searchType: Query = router.query && Object.keys(router.query)[0] as Query || "episodes"
  const searchInput = router.query && router.query[searchType]

  const {
    next,
		loadMore,
		isLoading,
		error,
		episodesResults,
		charactersResults,
		locationsResults,
  } = useSearch(searchType, searchInput)

  const { toggleCard: toggleCardLocation } = useCards<Location>()
  const { toggleCard: toggleCardCharacter } = useCards<Character>()

  return (
    <OptionsMainContentContainer
      variants={contentVariants}
      {...animationProps}
    >
      <SearchResultsPageTitle>{searchType} Search Results for '{searchInput}'</SearchResultsPageTitle>
      { 
        episodesResults && (
          <>
            <EpisodeCardList 
              episodeInfo={episodesResults.episodes.results}
            />
            <StatusContainer>
              { isLoading && <Loader /> }
              { next && !isLoading && (
                <button onClick={loadMore}>
                  <span>Load more</span>
                </button>
              )}
              { error && (<span>An error has occurred: {error}</span>)}
            </StatusContainer>
          </>
          )
      }

      { 
        charactersResults && (
          <PopupList 
            cardList={
              <CharacterCardList 
                key="locationsCardList"
                cardData={charactersResults.characters.results} 
                onClick={toggleCardCharacter} 
                nextPage={!!next}
                handleLoadMore={loadMore}
                loading={isLoading}
                error={error}
              />
            }
            activeId={null}
          />
        )
      }

      { 
        locationsResults && (
          <PopupList 
            cardList={
              <LocationCardList 
                key="locationsCardList"
                cardData={locationsResults.locations.results} 
                onClick={toggleCardLocation} 
                nextPage={!!next}
                handleLoadMore={loadMore}
                loading={isLoading}
                error={error}
              />
            }
            activeId={null}
          />
        )
      }
    </OptionsMainContentContainer>
  )
}

export default SearchPage
