## Table of Content

[Installation](#installation)
[Takeaway](#takeaway)

## Installation

- Clone the repo
- Type `cd rick-and-morty-api` to change into the directory and run `yarn` to install the dependencies
- To start, run `yarn dev` to start the app in development mode
- Open [http://localhost:3000](http://localhost:3000) with your browser

## Takeaway

- Next.js framework
  - use `getStaticProps` to fetch data from api (First page of api is rendered at build time with SSG, since it is unlikely to change)
  - use `getStaticProps` and `getStaticPaths` to fetch data from api for dynamic routing (statically pre-render pages for the first 20 episodes, other pages will be rendered by the server upon request)
