import {StyleSheet} from 'react-native'
import MapView from 'react-native-maps'
import Marker from './Marker'

export {Marker}

export default function ListingMap({children, lat, lng, style}) {
  return (
    <MapView
      style={[{flex: 1, width: '100%', height: '100%'}, style]}
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
