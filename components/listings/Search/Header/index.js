import {View, TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

export default function SearchHeader({root, onNavigate, onReset}) {
  const icon = root ? 'close' : 'chevron-left'
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onNavigate}>
        <Icon style={styles.icon} name={icon} />
      </TouchableOpacity>
      <Text style={styles.title}>Filtrar Busca</Text>
      <TouchableOpacity onPress={onReset}>
        <Text>Limpar</Text>
      </TouchableOpacity>
    </View>
  )
}
