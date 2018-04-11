import {View, Text} from 'react-native'

import styles from './styles'

export default function Separator({style, children}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.line} />
      {children && <Text style={styles.text}>{children}</Text>}
      {children && <View style={styles.line} />}
    </View>
  )
}
