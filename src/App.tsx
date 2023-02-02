import './App.css'
import { useQuery } from '@apollo/client'
import { nearest } from './graphql'

function App() {
  const { data } = useQuery(nearest)
  console.log(data)
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      {/* <div>{data?.bikeStation}</div> */}
    </div>
  )
}

export default App
