import './App.css'
import { useQuery } from '@apollo/client'
import { gql } from './gql'

// TODO Schema intelisesne
// TODO Path aliases or not
// TODO Check documents array syntax in codegen
// TODO 

const nearest = gql(/* GraphQL */ `
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

function App() {
  // eslint-disable-next-line max-len
  const { data } = useQuery(nearest)

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      {/* <div>{data?.bikeStation}</div> */}
    </div>
  )
}

export default App
