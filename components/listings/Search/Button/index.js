import {TouchableOpacity, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

export default function FilterButton({children, icon, active, ...props}) {
  return (
    <TouchableOpacity {...props}>
      <View style={[styles.container, active && styles.activeContainer]}>
        {icon && <Icon name={icon} size={25} style={styles.icon} />}
        {children && (
          <Text style={[styles.text, active && styles.activeText]}>
            {children.toUpperCase()}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
