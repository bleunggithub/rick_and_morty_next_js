## Table of Content
deployed on Vercel - [https://rick-and-morty-next-js-phi.vercel.app/](https://rick-and-morty-next-js-phi.vercel.app/)

<img src="https://github.com/bleunggithub/rick_and_morty_next_js/blob/main/Screenshot%202021-10-08%20at%2012.29.49%20PM.png" width="600"/>

- [Installation](#installation)
- [Main Features](#main-features)

## Installation

- Clone the repo
- Type `cd rick-and-morty-next-js` to change into the directory and run `yarn` to install the dependencies
- Copy the text in the `.env.example` file, create a file named `.env.local` and paste the copied text
- To start, run `yarn dev` to start the app in development mode
- Open [http://localhost:3000](http://localhost:3000) with your browser

## Main Features
- Mobile-responsive 
  - fits major screen sizes

- Next.js framework
  - SSG & SSR
  - use `getStaticProps` to fetch data from api to avoid excessives api call (index page only - first page of the api is rendered at build time with SSG, since it is unlikely to change)

- Apollo Client
  - to work with GraphQL
  - use normalised cache 
    - to avoid excessive api calls
    - as a state management tool (single source of truth)
  - useQuery hook provides easy-to-use 'fetchMore' method (used to fetch data other than index page)

- Framer Motion
  - motion library for React
  - facilitate smooth page transition and other animations

- Styled-components
  - enhanced development experience
  - create reusable components
