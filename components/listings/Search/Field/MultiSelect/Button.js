import {TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import {button as styles} from './styles'

export default function MultiSelectOption({label, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
        <Icon style={[styles.text, styles.icon]} name="close" />
      </View>
    </TouchableOpacity>
  )
}
