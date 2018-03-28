import MapView from 'react-native-maps'
import Marker from './Marker'

export {Marker}

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
      {typeof children === 'undefined' ? (
        <Marker icon="home" address={{lat, lng}} />
      ) : (
        children
      )}
    </MapView>
  )
}
