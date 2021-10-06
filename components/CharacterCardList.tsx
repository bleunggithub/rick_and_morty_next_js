import Image from "next/image"
import { Character } from "../interface/characters"
import { OutlineText } from "../styles/BaseElements"
import { CharacterCardsContainer, StatusContainer, CharacterImageContainer, CharacterTextContainer } from '../styles/Cards'
import Loader from './Loader'
import CharacterCard from './CharacterCard'

interface CharacterCardListProps {
  cardData?: Character[]
  onClick: (
    route: string, 
    cardData: Character | null, 
    id: string | null
  ) => void
  nextPage: null | boolean
  handleLoadMore: () => void
  loading: boolean
  error: string | null
}

const CharacterCardList = ({ 
  cardData, 
  onClick,
  nextPage, 
  handleLoadMore, 
  loading, 
  error
}: CharacterCardListProps) => {
  return (
    <>
    {cardData && (
      <CharacterCardsContainer>
        {cardData.map((item) => (
          <CharacterCard
            characterData={item}
            key={item.id}
            onClick={() => 
              onClick(`/characters?id=${item.id}`, item, item.id)
            }
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

export default CharacterCardList
