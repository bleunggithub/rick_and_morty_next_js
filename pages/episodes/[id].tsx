
import { GetStaticPaths, GetStaticProps } from 'next'
import { Episode, EpisodeDetails, EpisodesDetails } from '../../interface/episodes'
import { initializeApollo } from '../../lib/apolloClient'
import AvatarCard from '../../components/AvatarCard'
import { MainContentContainer } from '../../styles/BaseElements'
import { IdContentContainer, IdTextContainer, TitleText, DetailText, AvatarCardsContainer } from '../../styles/Id'
import { GET_EPISODE, GET_EPISODES } from '../../GraphQL/episodes'
import { HeroImage } from '../../components/HeroImage'

interface EpisodeIdPageProps {
  episode: Episode
}

const EpisodeIdPage = ({episode}: EpisodeIdPageProps) => {

  return (
    <MainContentContainer>
      <HeroImage />
      <IdContentContainer>
        <IdTextContainer>
          <TitleText>
            #{episode.id} {episode.name}
          </TitleText>
          <DetailText>
            <span>Air Date </span>
            <span>{episode.air_date}</span>
          </DetailText>
          <DetailText>
            <span>Characters </span>
          </DetailText>
        <AvatarCardsContainer>
          {episode.characters.map((ch) => (
            <AvatarCard 
              key={ch.id}
              character={ch}
            />
          ))}
        </AvatarCardsContainer>
        </IdTextContainer>
      </IdContentContainer>

      
    </MainContentContainer>
  )
}

export default EpisodeIdPage

export const getStaticProps: GetStaticProps = async({params}) =>{

  const apolloClient = initializeApollo()

  const {data: {episode}} = await apolloClient.query<EpisodeDetails>({
    query: GET_EPISODE,
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
    query: GET_EPISODES,
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