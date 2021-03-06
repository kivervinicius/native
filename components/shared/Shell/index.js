import {SafeAreaView, ScrollView, View} from 'react-native'
import {GatewayProvider} from 'react-gateway'

import GatewayView from '@/components/shared/GatewayView'
import $styles from './styles'

function Shell({styles, children, scroll}) {
  const Main = scroll ? ScrollView : View
  return (
    <GatewayProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <GatewayView name="header" style={styles.header} />
          <Main style={styles.main}>{children}</Main>
          <GatewayView name="footer" style={styles.footer} />
        </View>
      </SafeAreaView>
    </GatewayProvider>
  )
}

export default $styles.inject()(Shell)

export {default as Navigation} from './Navigation'
export {default as Footer} from './Footer'
export {default as Header} from './Header'
export {default as Section} from './Section'
