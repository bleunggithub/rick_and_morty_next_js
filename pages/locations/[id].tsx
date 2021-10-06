
import { GetStaticPaths, GetStaticProps } from 'next'
import { GET_EPISODES_WITH_CHARACTER_DETAILS, GET_CHARACTER_DETAILS_BY_EPISODE_ID } from '../../GraphQL/Queries'
import { Episode, EpisodeDetails, EpisodesDetails } from '../../interface/episodes'
import { initializeApollo } from '../../lib/apolloClient'
import CharacterCard from '../../components/AvatarCard'
// import { CharacterCardsContainer } from '../../styles/Cards'
// import { IdRoot, IdDetailTextContainer } from '../../styles/Id'

interface LocationIdPageProps {
  episode: Episode
}

const LocationIdPage = ({episode}: LocationIdPageProps) => {

  return (
    <>
    </>
    // <IdRoot>
    //   <IdDetailTextContainer>
    //     <p>
    //       <b>Episode Number </b>
    //       <span>{episode.id}</span>
    //     </p>
    //     <p>
    //       <b>Episode Name </b>
    //       <span>{episode.name}</span>
    //     </p>
    //     <p>
    //       <b>Air Date </b>
    //       <span>{episode.air_date}</span>
    //     </p>
    //     <p><b>Character List </b></p>
    //   </IdDetailTextContainer>

    //   <CharacterCardsContainer>
    //     {episode.characters.map((ch) => (
    //       <CharacterCard 
    //         key={ch.id}
    //         character={ch}
    //       />
    //     ))}
    //   </CharacterCardsContainer>
      
    // </IdRoot>
  )
}

export default LocationIdPage

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