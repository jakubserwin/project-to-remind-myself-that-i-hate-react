import { LatLng } from 'leaflet'
import { useState } from 'react'
import {
  Marker, Popup, useMapEvents,
} from 'react-leaflet'

interface Props {
  onClick: (e: any) => void;
}

const LocationMarketComponent = ({ onClick }: Props) => {
  const [position, setPosition] = useState<LatLng | null>(null)

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
      onClick(e.latlng)
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default LocationMarketComponent
