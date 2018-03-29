import {View} from 'react-native'

import Text from '@/components/shared/Text'
import styles from './styles'

export default function ShellSection({title, children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      {children}
    </View>
  )
}
