import { HomeRoot, MainContentContainer } from '../styles/Home'
import { HeroImage } from '../components/HeroImage'
import { GetStaticProps } from 'next'
import { initializeApollo } from '../lib/apolloClient'
import { Episodes, EpisodesDetails } from '../interface/episodes'
import { GET_EPISODES } from '../GraphQL/episodes'
import EpisodeCardList from '../components/EpisodeCardList'
import { FlexRow, OutlineText } from '../styles/BaseElements'
import { useRouter } from 'next/dist/client/router'

interface IndexProps {
  episodes: Episodes
}

export default function Index({episodes}: IndexProps) {
  const router = useRouter()

  return (
    <HomeRoot>
      <HeroImage home/>
      <MainContentContainer>
        <FlexRow flexDirection='row' wrap='wrap' rowGap="1rem">
          <EpisodeCardList 
            episodeInfo={episodes.results.slice(0,3)}
            nextPage={null}
          />
        </FlexRow>
        <FlexRow justifyContent="center" margin="2rem 0 0 0">
          <OutlineText fontSize="1.5rem">Click on the menu to see more</OutlineText>
        </FlexRow>
      </MainContentContainer>
    </HomeRoot>
  )
}

export const getStaticProps: GetStaticProps = async() =>{

  const apolloClient = initializeApollo()

  const {data: { episodes }} = await apolloClient.query<EpisodesDetails>({
    query: GET_EPISODES,
    variables: {
      page: 1
    }
  })

  return {
    props:{
      episodes,
    }
  }
}