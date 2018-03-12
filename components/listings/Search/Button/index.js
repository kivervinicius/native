import {TouchableOpacity, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

export default function FilterButton({children, icon, ...props}) {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.container}>
        {icon && <Icon name={icon} size={25} style={styles.icon} />}
        {children && <Text style={styles.text}>{children.toUpperCase()}</Text>}
      </View>
    </TouchableOpacity>
  )
}
