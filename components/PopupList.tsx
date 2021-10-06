import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { animationProps } from '../animations/defaultValues'
import { contentVariants, overlayVariants } from '../animations/variants'
import { OptionPageTitleText, PopupMainContentContainer, ExpandedCardOverlay } from '../styles/OptionsPage'

interface PopupList {
  cardList: JSX.Element
  activeId: string | null
  onClick: React.MouseEventHandler<HTMLDivElement>
  expandedCard: JSX.Element
}

const PopupList = ({ cardList, activeId, onClick, expandedCard }: PopupList) => {
  return (
    <PopupMainContentContainer
      variants={contentVariants}
      {...animationProps}
    >
      <OptionPageTitleText>Characters</OptionPageTitleText>
      <AnimateSharedLayout>
        <AnimatePresence>
          {cardList}
          {
            activeId && (
              <>
                <ExpandedCardOverlay
                  key="overlay"
                  variants={overlayVariants}
                  {...animationProps}
                  onClick={onClick}
                />
                {expandedCard}
              </>
            )
          }
        </AnimatePresence>
      </AnimateSharedLayout>
    </PopupMainContentContainer>
  )
}

export default PopupList
