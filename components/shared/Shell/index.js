import {SafeAreaView} from 'react-native'

import Navigation from './Navigation'
import styles from './styles'

export default function Shell({children, ...props}) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <Navigation {...props} />
    </SafeAreaView>
  )
}
