import {TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import styles from './styles'

export default function ButtonField({children, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
        <Icon style={styles.icon} name="chevron-right" />
      </View>
    </TouchableOpacity>
  )
}
