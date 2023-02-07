import {
  MapContainer, TileLayer,
} from 'react-leaflet'
import LocationMarketComponent from './LocationMarkerComponent'

const MapComponent = () => {
  const handleClick = (e: any) => {
    console.log(e)
  }
  return (
    <div className="h-full w-full rounded-xl overflow-hidden">
      <MapContainer center={[64, 26]} zoom={5} scrollWheelZoom={false} className="h-full">
        <TileLayer
          url="http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          maxZoom={20}
        />
        <LocationMarketComponent onClick={handleClick} />
      </MapContainer>
    </div>
  )
}

export default MapComponent
