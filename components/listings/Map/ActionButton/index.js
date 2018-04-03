import {View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import styles from './styles'

export default function ListingMapActionButton({
  style,
  children,
  icon,
  onPress
}) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={styles.container}>
        <Icon style={styles.icon} name={icon} />
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}
