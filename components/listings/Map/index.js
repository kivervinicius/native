import MapView from 'react-native-maps'
import Marker from './Marker'
import Aggregator from './Aggregator'

export {Marker, Aggregator}

const Zoom = {
  close: {
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034
  },
  far: {
    latitudeDelta: 0.043 * 2,
    longitudeDelta: 0.034 * 2
  }
}

export default function ListingMap({children, zoom, lat, lng, style}) {
  return (
    <MapView
      style={[{flex: 1, width: '100%', height: '100%'}, style]}
      initialRegion={{
        latitude: lat,
        longitude: lng,
        ...Zoom[zoom]
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

ListingMap.defaultProps = {
  lat: -22.9608099,
  lng: -43.2096142,
  zoom: 'far'
}
