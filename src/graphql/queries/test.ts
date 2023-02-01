import { graphql } from '../../gql'

// eslint-disable-next-line import/prefer-default-export
export const test = graphql(/* GraphQL */ `
  query test {
    bikeStation(findBy: { closest: { latitude: 41.402451, longitude: 2.1880918 } }) {
      ...on BikeStation{
        name,
        coordinates {
          latitude
          longitude
        }
      }
    }
`)
