import { motion } from 'framer-motion'
import { Routes } from '../interface'

interface HomeMenuButtonProps {
  routeName: Routes
  selected: boolean
  handleClickLink: (e: React.MouseEvent<HTMLAnchorElement>, selected: Routes) => void
  offset?: string
}

const HomeMenuButton = ({routeName, selected, handleClickLink, offset = '0'}:HomeMenuButtonProps) => {

  return (
    <motion.section 
      {...selected && {
        exit: {
          scaleX: 5, 
          x: offset, 
          transition: { 
            duration: 1.5 
          }
        }
      }}
    >
      <a onClick={(e)=>handleClickLink(e, routeName)}>
        <motion.span 
          { ...selected && {
            exit: {
              opacity: 0
            }
          }}
        >
          {routeName}
        </motion.span>
      </a>
    </motion.section>
  )
}

export default HomeMenuButton
