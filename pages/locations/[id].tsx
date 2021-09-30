
import { GetStaticPaths, GetStaticProps } from 'next'
import { GET_EPISODES_WITH_CHARACTER_DETAILS, GET_CHARACTER_DETAILS_BY_EPISODE_ID } from '../../GraphQL/Queries'
import { Episode, EpisodeDetails, EpisodesDetails } from '../../interface'
import { initializeApollo } from '../../lib/apolloClient'
import styles from '../../styles/Episodes.module.scss'
import CharacterCard from '../../components/CharacterCard'

interface EpisodeWithCharacterDetailsProps {
  episode: Episode
}

const EpisodeWithCharacterDetails = ({episode}: EpisodeWithCharacterDetailsProps) => {

  return (
    <div className={styles.episodePageRoot}>
      <div className={styles.episodeDetailText}>
        <p>
          <b>Episode Number </b>
          <span>{episode.id}</span>
        </p>
        <p>
          <b>Episode Name </b>
          <span>{episode.name}</span>
        </p>
        <p>
          <b>Air Date </b>
          <span>{episode.air_date}</span>
        </p>
        <p>
          <b>Created </b>
          <span>{new Date(episode.created).toLocaleDateString()}</span>
        </p>
        <p><b>Character List </b></p>
      </div>

      <div className={styles.characterCardsContainer}>
        {episode.characters.map((ch) => (
          <CharacterCard 
            key={ch.id}
            character={ch}
          />
        ))}
      </div>
      
    </div>
  )
}

export default EpisodeWithCharacterDetails

export const getStaticProps: GetStaticProps = async({params}) =>{

  const apolloClient = initializeApollo()

  const {data: {episode}} = await apolloClient.query<EpisodeDetails>({
    query: GET_CHARACTER_DETAILS_BY_EPISODE_ID,
    variables: {
      id: params?.id
    }
  })

  return {
    props:{
      episode
    },
    revalidate: 1
  }
}

export const getStaticPaths: GetStaticPaths = async() => {
  const apolloClient = initializeApollo()

  const {data: { episodes }} = await apolloClient.query<EpisodesDetails>({
    query: GET_EPISODES_WITH_CHARACTER_DETAILS,
    variables: {
      page: 1 
    }
  })

  const paths = episodes?.results?.map((episode)=>({params: {id: episode.id}}))

  return {
    paths,
    fallback: 'blocking'
  }
}