import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

export default function Menu({options, onSelect}) {
  return (
    <View style={styles.container}>
      {options.map(({label, value}) => (
        <TouchableOpacity key={value} onPress={onSelect(value)}>
          <View style={styles.item}>
            <Text style={styles.itemText}>{label}</Text>
            <Icon name="chevron-right" style={styles.itemIcon} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}
