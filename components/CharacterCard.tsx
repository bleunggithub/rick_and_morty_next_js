import { Character } from '../interface/episodes'
import { CharacterCardRoot } from '../styles/Cards'
interface CharacterCardProps {
  character: Character
}

const CharacterCard = ({character}: CharacterCardProps) => {

  return (
    <CharacterCardRoot>
      <div>
        <p>ID: {character.id}</p>
        <p>Name: {character.name}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Status: {character.status}</p>
      </div>
      <div>
        <img src={character.image} alt={character.name} width={180} height={180} />
      </div>
    </CharacterCardRoot>
  )
}

export default CharacterCard
