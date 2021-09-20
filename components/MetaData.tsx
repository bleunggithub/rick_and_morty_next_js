import Head from 'next/head'

const MetaData = () => {
  return (
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Next.js app that displays the details of each Rick and Morty Episode with implementation of Apollo Client and GraphQL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default MetaData
