import { GiDutchBike } from 'react-icons/gi'
import { IoBusOutline } from 'react-icons/io5'
import { AiOutlineCar } from 'react-icons/ai'

const SidePanelComponent = () => (
  <div>
    <div className="flex items-center justify-between w-72">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Filters</h2>
      <button type="button" className="text-blue-600">Reset</button>
    </div>
    <div className="mt-8">
      <h3 className="text-sm font-bold">Location Type:</h3>
      <div className="flex gap-4 mt-1">
        <button type="button" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-md flex-1 text-2xl grid place-items-center text-gray-50">
          <IoBusOutline />
        </button>
        <button type="button" className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-md flex-1 text-2xl grid place-items-center text-gray-50">
          <GiDutchBike />
        </button>
        <button type="button" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-md flex-1 text-2xl grid place-items-center text-gray-50">
          <AiOutlineCar />
        </button>
      </div>
    </div>

  </div>
)

export default SidePanelComponent
