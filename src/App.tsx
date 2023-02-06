import SidePanelComponent from './components/SidePanelComponent'
import NavBarComponent from './components/NavBarComponent'

const App = () => (
  <div className="flex flex-col gap-8">
    <NavBarComponent />
    <div className="border flex gap-8 w-full h-screen">
      <SidePanelComponent />
      <div className="bg-teal-100 h-full w-full" />
    </div>
  </div>
)

export default App
