import { Character } from "../interface/characters"
import { IdCardsContainer, StatusContainer } from '../styles/Cards'
import Loader from './Loader'
import CharacterCard from './CharacterCard'
import { CardListProps } from "../interface"


const CharacterCardList = ({ 
  cardData, 
  onClick,
  nextPage, 
  handleLoadMore, 
  loading, 
  error
}: CardListProps<Character>) => {
  return (
    <>
    {cardData && (
      <IdCardsContainer>
        {cardData.map((item) => (
          <CharacterCard
            characterData={item}
            key={item.id}
            onClick={() => 
              onClick(`/characters?id=${item.id}`, item, item.id)
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

export default CharacterCardList
