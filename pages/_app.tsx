import "@fontsource/ibm-plex-sans"
import '../styles/globals.css'
import MetaData from '../components/MetaData'
import Navbar from '../components/Navbar'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client"
import { useApollo } from '../lib/apolloClient'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  
  return (
    <>
    <MetaData />
    <Navbar />
    <ApolloProvider client={apolloClient}>
      <AnimatePresence 
        exitBeforeEnter 
        initial={false} 
        onExitComplete={()=>window.scrollTo(0,0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ApolloProvider>
    </>
  )
}
export default MyApp