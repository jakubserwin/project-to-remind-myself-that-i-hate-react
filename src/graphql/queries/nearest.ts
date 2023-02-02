import { gql } from '../../gql'

export const nearest = gql(/* GraphQL */ `
  query nearest {
    nearest(lat: 60.400105, lon: 23.088225) {
      edges {
        node {
          id
          distance
          place {
            lat
            lon
          }
        }
      }
    }
  }
`)
