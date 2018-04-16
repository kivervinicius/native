import React from 'react'
import {SafeAreaView, ScrollView, View} from 'react-native'

import $styles from './styles'

function renderElement(Element, props = {}) {
  if (React.isValidElement(Element)) return Element
  return <Element {...props} />
}

function Shell({styles, children, header, footer, scroll, ...props}) {
  const Main = scroll ? ScrollView : View
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {header && (
          <View style={styles.header}>{renderElement(header, props)}</View>
        )}
        <Main style={styles.main}>{children}</Main>
        {footer && (
          <View style={styles.footer}>{renderElement(footer, props)}</View>
        )}
      </View>
    </SafeAreaView>
  )
}

export default $styles.inject()(Shell)

export {default as Section} from './Section'
export {default as Header} from './Header'
export {default as Footer} from './Footer'
export {default as Navigation} from './Navigation'
