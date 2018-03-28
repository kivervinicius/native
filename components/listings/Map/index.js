import MapView from 'react-native-maps'

export default function ListingMap({children, lat, lng, style}) {
  return (
    <MapView
      style={style}
      initialRegion={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034
      }}
    >
      {children}
    </MapView>
  )
}

export {default as Marker} from './Marker'
