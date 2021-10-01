import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { SelectMenuAnimationProps } from '../animations/variants'
import { Query } from '../interface/queries'
import { Select, CapitalisedLabel, LabelContainer, DropDownIcon } from '../styles/SelectMenu'

interface DropDownContentProps extends Partial<SelectMenuProps> {}

interface DropDownProps extends SelectMenuProps {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface SelectMenuProps {
  searchType: Query
  setSearchType: React.Dispatch<React.SetStateAction<Query>>
}

const dropDownOptions: Query[] = ['episodes', 'characters', 'locations']

const DropDownContent = ({setSearchType}: DropDownContentProps) => {
  return (
    <motion.div layout>
      {dropDownOptions.map((option) => (
        <div key={option} onClick={()=>setSearchType!(option)}>
          <CapitalisedLabel hover>{option}</CapitalisedLabel>
        </div>
      ))}
    </motion.div>
  )
}

const DropDown = ({isOpen, setOpen, searchType, setSearchType}: DropDownProps) => {
  return (
    <div onClick={() => setOpen(!isOpen)}>
      <LabelContainer>  
        <CapitalisedLabel>{searchType}</CapitalisedLabel>
        <DropDownIcon>&#8711;</DropDownIcon>
      </LabelContainer>
      <AnimatePresence>
        {isOpen && (
          <motion.div {...SelectMenuAnimationProps}>
            <DropDownContent setSearchType={setSearchType} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )  
}


const SelectMenu = ({searchType, setSearchType}: SelectMenuProps) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Select>
      <DropDown 
        isOpen={isOpen} 
        setOpen={setOpen} 
        searchType={searchType}
        setSearchType={setSearchType}
      />
    </Select>
  )
}

export default SelectMenu
