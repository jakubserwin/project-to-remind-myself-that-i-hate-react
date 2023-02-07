import { LatLng } from 'leaflet'
import { useState } from 'react'
import {
  Marker, Popup, useMapEvents,
} from 'react-leaflet'

interface Props {
  onClick: (latLng: LatLng) => void;
}

const LocationMarketComponent = ({ onClick }: Props) => {
  const [position, setPosition] = useState<LatLng | null>(null)

  const map = useMapEvents({
    click({latlng} ) {
      setPosition(latlng)
      map.flyTo(latlng, 12)
      onClick(latlng)
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default LocationMarketComponent
