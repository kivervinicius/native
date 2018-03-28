import {Marker} from 'react-native-maps'

export default function ListingMarker({lat, lng}) {
  const props = {
    coordinate: {
      latitude: lat,
      longitude: lng
    }
  }
  return <Marker {...props} />
}
