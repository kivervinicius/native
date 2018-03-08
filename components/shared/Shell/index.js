import {SafeAreaView, ScrollView, View} from 'react-native'

import Navigation from './Navigation'
import styles from './styles'

export default function Shell({children, ...props}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main}>{children}</ScrollView>
      <View style={styles.nav}>
        <Navigation {...props} />
      </View>
    </SafeAreaView>
  )
}
