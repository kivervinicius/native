import {SafeAreaView, View} from 'react-native'

import Navigation from './Navigation'
import styles from './styles'

export default function Shell({children, ...props}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>{children}</View>
      <View style={styles.nav}>
        <Navigation {...props} />
      </View>
    </SafeAreaView>
  )
}
