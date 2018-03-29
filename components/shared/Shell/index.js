import {SafeAreaView, ScrollView, View} from 'react-native'

import Navigation from './Navigation'
import Section from './Section'
import styles from './styles'

export default function Shell({children, header, scroll, ...props}) {
  const Main = scroll ? ScrollView : View
  return (
    <SafeAreaView style={styles.container}>
      {header && <View style={styles.header}>{header}</View>}
      <Main style={styles.main}>{children}</Main>
      <View style={styles.nav}>
        <Navigation {...props} />
      </View>
    </SafeAreaView>
  )
}

export {Section}
