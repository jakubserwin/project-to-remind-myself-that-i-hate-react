import SidePanelComponent from './components/SidePanelComponent'
import NavBarComponent from './components/NavBarComponent'
import MapComponent from './components/MapComponent'

const App = () => (
  <div className="flex flex-col h-screen">
    <NavBarComponent />
    <div className="flex gap-8 w-full h-full py-8">
      <SidePanelComponent />
      <MapComponent />
    </div>
  </div>
)

export default App
