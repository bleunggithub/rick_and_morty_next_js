import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { animationProps } from '../animations/defaultValues'
import { contentVariants, overlayVariants } from '../animations/variants'
import { OptionPageTitleText, PopupMainContentContainer, ExpandedCardOverlay } from '../styles/OptionsPage'

interface PopupList {
  from?: string
  cardList: JSX.Element
  activeId: string | null
  onClick?: React.MouseEventHandler<HTMLDivElement>
  expandedCard?: JSX.Element
}

const PopupList = ({ from, cardList, activeId, onClick, expandedCard }: PopupList) => {
  return (
    <PopupMainContentContainer
      variants={contentVariants}
      {...animationProps}
    >
      <OptionPageTitleText marginTop={!!from}>{from}</OptionPageTitleText>
      <AnimateSharedLayout>
        <AnimatePresence>
          {cardList}
          {
            activeId && (
              <>
                <ExpandedCardOverlay
                  key={`overlay${from}`}
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
