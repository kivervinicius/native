import {SafeAreaView, ScrollView, View} from 'react-native'

import Section from './Section'
import $styles from './styles'

function Shell({styles, children, header, footer, scroll}) {
  const Main = scroll ? ScrollView : View
  return (
    <SafeAreaView style={styles.container}>
      {header && <View style={styles.header}>{header}</View>}
      <Main style={styles.main}>{children}</Main>
      {footer && <View style={styles.footer}>{footer}</View>}
    </SafeAreaView>
  )
}

export {Section}

export default $styles.inject()(Shell)
