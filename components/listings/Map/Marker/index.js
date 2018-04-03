import {View} from 'react-native'
import {Marker, Callout} from 'react-native-maps'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import {abbrevPrice} from '@/assets/format'
import $styles from './styles'

function ListingMarker({styles, icon, price, address: {lat, lng}, ...props}) {
  return (
    <Marker
      {...props}
      coordinate={{
        latitude: lat,
        longitude: lng
      }}
    >
      <View style={styles.container}>
        <View style={styles.body}>
          {icon ? (
            <Icon style={styles.text} name={icon} />
          ) : (
            <Text style={styles.text}>{abbrevPrice(price)}</Text>
          )}
        </View>
        <View style={styles.tip} />
      </View>
      <Callout tooltip />
    </Marker>
  )
}

export default $styles.inject()(ListingMarker)
