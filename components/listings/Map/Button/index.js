import {View, TouchableOpacity} from 'react-native'

import styles from './styles'

export default function ListingMapButton({style, onPress}) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={styles.container} />
    </TouchableOpacity>
  )
}
