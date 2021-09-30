# (Working in progress)
## Table of Content
deployed on Vercel - [https://rick-and-morty-next-js-phi.vercel.app/](https://rick-and-morty-next-js-phi.vercel.app/)

- [Installation](#installation)
- [Takeaway](#takeaway)

## Installation

- Clone the repo
- Type `cd rick-and-morty-api` to change into the directory and run `yarn` to install the dependencies
- Copy the text in the `.env.example` file, create a file named `.env.local` and paste the copied text
- To start, run `yarn dev` to start the app in development mode
- Open [http://localhost:3000](http://localhost:3000) with your browser

## Takeaway

- Next.js framework
  - use `getStaticProps` to fetch data from api (First page of api is rendered at build time with SSG, since it is unlikely to change)
  - use `getStaticProps` and `getStaticPaths` to fetch data from api for dynamic routing (statically pre-render pages for the first 20 episodes, other pages will be rendered by the server upon request)
