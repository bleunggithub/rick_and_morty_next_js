import { motion } from 'framer-motion'
import { Route } from '../interface'

interface HomeMenuOptionProps {
  routeName: Route
  selected: boolean
  handleClickLink: (e: React.MouseEvent<HTMLAnchorElement>, selected: Routes) => void
  offset?: string
}

const HomeMenuOption = ({routeName, selected, handleClickLink, offset = '0'}:HomeMenuOptionProps) => {

  return (
    <motion.section 
      {...selected && {
        exit: {
          scale: 5, 
          x: offset, 
          transition: { 
            duration: 1.5 
          }
        }
      }}
    >
      <a onClick={(e)=>handleClickLink(e, routeName)}>
        <motion.span exit={{opacity: 0}}>
          {routeName}
        </motion.span>
      </a>
    </motion.section>
  )
}

export default HomeMenuOption
