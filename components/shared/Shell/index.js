import {SafeAreaView, ScrollView, View} from 'react-native'
import {GatewayProvider, GatewayDest} from 'react-gateway'

import $styles from './styles'

function Shell({styles, children, scroll}) {
  const Main = scroll ? ScrollView : View
  return (
    <GatewayProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <GatewayDest name="header" component={View} style={styles.header} />
          <Main style={styles.main}>{children}</Main>
          <GatewayDest name="footer" component={View} style={styles.footer} />
        </View>
      </SafeAreaView>
    </GatewayProvider>
  )
}

export default $styles.inject()(Shell)

export {default as Section} from './Section'
export {default as Header} from './Header'
export {default as Footer} from './Footer'
export {default as Navigation} from './Navigation'
