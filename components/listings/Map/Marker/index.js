import {View} from 'react-native'
import {Marker} from 'react-native-maps'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import {abbrevPrice} from '@/assets/format'
import $styles from './styles'

function ListingMarker({styles, icon, price, address: {lat, lng}}) {
  const props = {
    coordinate: {
      latitude: lat,
      longitude: lng
    }
  }
  return (
    <Marker {...props}>
      <View style={styles.container}>
        <View style={styles.body}>
          {icon ? (
            <Icon style={styles.all('text', 'icon')} name={icon} />
          ) : (
            <Text style={styles.text}>{abbrevPrice(price)}</Text>
          )}
        </View>
      </View>
      <View style={styles.tip} />
    </Marker>
  )
}

export default $styles.inject(ListingMarker)
