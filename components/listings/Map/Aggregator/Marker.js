import {View} from 'react-native'
import {Marker, Callout} from 'react-native-maps'

import Text from '@/components/shared/Text'
import $styles from './styles'

function AggregatorMarker({styles, children, lat, lng, ...props}) {
  return (
    <Marker
      {...props}
      coordinate={{
        latitude: lat,
        longitude: lng
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
      <Callout tooltip />
    </Marker>
  )
}

export default $styles.inject()(AggregatorMarker)
