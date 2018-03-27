import {Button, View} from 'react-native'

import styles from './styles'

export default function SearchScreen({children, onSubmit}) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>{children}</View>
      <View style={styles.footer}>
        <Button style={styles.button} title="Aplicar" onPress={onSubmit} />
      </View>
    </View>
  )
}
