import { useState, useCallback } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../../GraphQL/characters'
import { Character, CharactersDetails } from '../../interface/characters'
import CharacterCardList from '../../components/CharacterCardList'
import ExpandedCharacterCard from '../../components/ExpandedCharacterCard'
import useCards from '../../components/hooks/useCards'
import PopupList from '../../components/PopupList'

const CharactersPage = () => {
  const { activeId, toggleCard, activeCardData } = useCards<Character>()

  const [error, setError] = useState<null | string>(null)

  const { loading, fetchMore, data } = useQuery<CharactersDetails>(GET_CHARACTERS, {
    notifyOnNetworkStatusChange: true,
    onError: err => setError(err.message)
  })

  const { characters } = data || {};
  const next = characters?.info?.next;
  
  const handleLoadMore = useCallback(() =>
    fetchMore({
      variables: { page: next },
    }),
    [fetchMore, next]
  )
  
  const closeCard = () => {
    toggleCard('/characters', null, null)
  }

  return (
    <PopupList
      from="characters"
      cardList={
        <CharacterCardList 
          key="characterCardList"
          cardData={characters?.results} 
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
        <ExpandedCharacterCard
          key="characterCard"
          activeId={activeId}
          activeCardData={activeCardData}
          onClick={closeCard}
        />
      }
    />
  )
}

export default CharactersPage



