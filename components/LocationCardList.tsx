import { Location } from "../interface/locations"
import { CharacterCardsContainer, StatusContainer } from '../styles/Cards'
import Loader from './Loader'
import LocationCard from './LocationCard'
import { CardListProps } from "../interface"

const LocationCardList = ({ 
  cardData, 
  nextPage, 
  handleLoadMore, 
  loading, 
  error
}: CardListProps<Location>) => {
  return (
    <>
    {cardData && (
      <CharacterCardsContainer>
        {cardData.map((item) => (
          <LocationCard
            locationData={item}
            key={item.id}
          />
        ))}
      </CharacterCardsContainer>
    )}
      <StatusContainer>
        { loading && <Loader />}
        { nextPage && !loading && (
            <button onClick={handleLoadMore}>
              <span>Load more</span>
            </button>
          )}
        { error && (<span>An error has occurred: {error}</span>)}
      </StatusContainer>
    </>
  )
}

export default LocationCardList
