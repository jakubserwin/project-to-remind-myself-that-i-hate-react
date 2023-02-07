import SidePanelComponent from './components/SidePanelComponent'
import NavBarComponent from './components/NavBarComponent'
import MapComponent from './components/MapComponent'
import { FilterPlaceType } from './gql/graphql'
import { useState } from 'react'

const App = () => {
  const [locationType, setLocationType] = useState<FilterPlaceType | null>(null)

  const handleClick = (type: FilterPlaceType) => {
    setLocationType(type)
  }

  return (
    <div className="flex flex-col h-screen">
      <NavBarComponent/>
      <div className="flex gap-8 w-full h-full py-8">
        <SidePanelComponent onClick={handleClick}/>
        <MapComponent locationType={locationType}/>
      </div>
    </div>
  )
}

export default App
