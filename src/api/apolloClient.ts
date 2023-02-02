import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const httpLink = new HttpLink({
  uri: 'https://api.digitransit.fi/routing/v1/routers/finland/index/graphql',
})

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
