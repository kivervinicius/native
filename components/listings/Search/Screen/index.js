import {Button, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

export default function SearchScreen({children, to, onNavigate, onSubmit}) {
  const icon = to ? 'chevron-left' : 'close'
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onNavigate}>
        <Icon name={icon} size={30} />
      </TouchableOpacity>
      <View style={styles.body}>{children}</View>
      <View style={styles.footer}>
        <Button style={styles.button} title="Aplicar" onPress={onSubmit} />
      </View>
    </View>
  )
}
