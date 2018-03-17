import MapView, {Marker} from 'react-native-maps'

import styles from './styles'

export default function ListingMap({lat, lng}) {
  const coordinates = {
    latitude: lat,
    longitude: lng
  }
  return (
    <MapView
      style={styles.container}
      initialRegion={{
        ...coordinates,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034
      }}
    >
      <Marker coordinate={coordinates} />
    </MapView>
  )
}
