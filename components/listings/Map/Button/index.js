import {View, TouchableOpacity} from 'react-native'

import styles from './styles'

export default function ListingMapButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container} />
    </TouchableOpacity>
  )
}
