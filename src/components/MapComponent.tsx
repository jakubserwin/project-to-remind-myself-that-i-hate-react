import { LatLng } from 'leaflet'
import {
  MapContainer, TileLayer,
} from 'react-leaflet'
import LocationMarketComponent from './LocationMarkerComponent'
import { useLazyQuery } from '@apollo/client'
import { nearest } from '../graphql'
import { useState } from 'react'
import { FilterPlaceType } from '../gql/graphql'

interface Props {
  locationType: FilterPlaceType | null;
}

const MapComponent = ({ locationType }: Props) => {
  const [position, setPosition] = useState<LatLng | null>(null)

  const [getNearest] = useLazyQuery(nearest)

  const handleClick = async (latLng: LatLng) => {
    if (!latLng || !locationType) return

    const { lat, lng: lon } = latLng

    const { data } = await getNearest({
      variables: {
        lat,
        lon,
        filterByPlaceTypes: locationType
      },
    })

    console.log(data)
  }

  return (
    <div className="h-full w-full rounded-xl overflow-hidden">
      <MapContainer center={[64, 26]} zoom={5} scrollWheelZoom={false} className="h-full">
        <TileLayer
          url="http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          maxZoom={20}
        />
        <LocationMarketComponent onClick={handleClick}/>
      </MapContainer>
    </div>
  )
}

export default MapComponent
