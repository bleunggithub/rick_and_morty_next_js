import { Location } from "../interface/locations"
import { IdCardsContainer, StatusContainer } from '../styles/Cards'
import Loader from './Loader'
import LocationCard from './LocationCard'
import { CardListProps } from "../interface"

const LocationCardList = ({ 
  cardData, 
  nextPage, 
  onClick,
  handleLoadMore, 
  loading, 
  error
}: CardListProps<Location>) => {
  return (
    <>
    {cardData && (
      <IdCardsContainer>
        {cardData.map((item) => (
          <LocationCard
            locationData={item}
            key={item.id}
            onClick={() => 
              onClick(`/locations?id=${item.id}`, item, item.id)
            }
          />
        ))}
      </IdCardsContainer>
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
