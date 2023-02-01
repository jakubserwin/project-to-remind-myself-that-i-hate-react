import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const httpLink = new HttpLink({
  uri: 'https://api.digitransit.fi/routing/v1/routers/finland/index/graphql',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

// eslint-disable-next-line import/prefer-default-export
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
