import { gql } from '../../gql'

export const nearest = gql(/* GraphQL */ `
    query nearest($lat: Float!, $lon: Float!, $filterByPlaceTypes: [FilterPlaceType] ) {
        nearest(lat: $lat, lon: $lon, filterByPlaceTypes: $filterByPlaceTypes) {
            edges {
                node {
                    place {
                        lat
                        lon
                    }
                }
            }
        }
    }
`)
