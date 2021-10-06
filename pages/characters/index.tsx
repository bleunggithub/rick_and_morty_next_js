import { useState, useCallback, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { animationProps } from '../../animations/defaultValues'
import { contentVariants, overlayVariants } from '../../animations/variants'
import { GET_CHARACTERS } from '../../GraphQL/characters'
import { Character,  CharactersDetails } from '../../interface/characters'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import CharacterCardList from '../../components/CharacterCardList'
import { CharacterTitleText, ExpandedCardOverlay, CharacterMainContentContainer } from '../../styles/OptionsPage'
import ExpandedCharacterCard from '../../components/ExpandedCharacterCard'

const CharactersPage = () => {
  const router = useRouter()

  const [error, setError] = useState<null | string>(null)

  const { loading, fetchMore, data } = useQuery<CharactersDetails>(GET_CHARACTERS, {
    notifyOnNetworkStatusChange: true,
    onError: err => setError(err.message)
  })

  const { characters } = data || {};
  const next = characters?.info?.next;

  const [activeId, setActiveId] = useState<null | string>(null)
  const [activeCardData, setActiveCardData] = useState<null | Character>(null)

  const handleLoadMore = useCallback(() =>
      fetchMore({
        variables: { page: next },
      }),
    [fetchMore, next]
  )

  const toggleCard = (
    route: string, 
    cardData: Character | null, 
    id: string | null
    ) => {
      router.push(route, route, { shallow: true })
      setActiveCardData(cardData)
      setActiveId(id)
  }

  useEffect(() => {
    router.query.id && 
      setActiveId(typeof router.query.id === 'string' ? 
        router.query.id: router.query.id[0]
      )
  }, [router.query.id])

  return (
      <CharacterMainContentContainer
        variants={contentVariants}
        {...animationProps}
      >
        <CharacterTitleText>Characters</CharacterTitleText>
        <AnimateSharedLayout>
          <AnimatePresence>
            <CharacterCardList 
              key="characterCardList"
              cardData={characters?.results} 
              onClick={toggleCard} 
              nextPage={!!next}
              handleLoadMore={handleLoadMore}
              loading={loading}
              error={error}
            />
            {
              activeId && (
                <>
                  <ExpandedCardOverlay
                    key="overlay"
                    variants={overlayVariants}
                    {...animationProps}
                    onClick={() => toggleCard('/characters', null, null)}
                  />
                  <ExpandedCharacterCard
                    key="characterCard"
                    activeId={activeId}
                    activeCardData={activeCardData}
                    onClick={toggleCard}
                  />
                </>
              )
            }
          </AnimatePresence>
        </AnimateSharedLayout>
      </CharacterMainContentContainer>
  )
}

export default CharactersPage



