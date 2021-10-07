import { useState, useCallback } from 'react'
import { useQuery } from '@apollo/client'
import LocationCardList from '../../components/LocationCardList'
import ExpandedLocationCard from '../../components/ExpandedLocationCard'
import useCards from '../../components/hooks/useCards'
import PopupList from '../../components/PopupList'
import { LocationsDetails } from '../../interface/locations'
import { GET_LOCATIONS } from '../../GraphQL/locations'
import { Location } from '../../interface/locations'

const LocationsPage = () => {
  const { activeId, toggleCard, activeCardData } = useCards<Location>()

  const [error, setError] = useState<null | string>(null)

  const { loading, fetchMore, data } = useQuery<LocationsDetails>(GET_LOCATIONS, {
    notifyOnNetworkStatusChange: true,
    onError: err => setError(err.message)
  })

  const { locations } = data || {};
  const next = locations?.info?.next;
  
  const handleLoadMore = useCallback(() =>
    fetchMore({
      variables: { page: next },
    }),
    [fetchMore, next]
  )
  
  const closeCard = () => {
    toggleCard('/locations', null, null)
  }

  return (
    <PopupList
      from="locations"
      cardList={
        <LocationCardList 
          key="locationsCardList"
          cardData={locations?.results} 
          onClick={toggleCard} 
          nextPage={!!next}
          handleLoadMore={handleLoadMore}
          loading={loading}
          error={error}
        />
      }
      activeId={activeId}
      onClick={closeCard}
      expandedCard={
        <ExpandedLocationCard
          key="locationCard"
          activeId={activeId}
          activeCardData={activeCardData}
          onClick={closeCard}
        />
      }
    />
  )
}

export default LocationsPage



