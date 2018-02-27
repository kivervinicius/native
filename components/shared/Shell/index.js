import {SafeAreaView} from 'react-native'

import styles from './styles'

export default function Shell({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}
