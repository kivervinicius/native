import {TouchableOpacity, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

export default function FilterButton({children, icon, ...props}) {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.buttonContainer}>
        {icon && <Icon name={icon} size={25} style={styles.buttonText} />}
        {children && (
          <Text style={styles.buttonText}>{children.toUpperCase()}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
