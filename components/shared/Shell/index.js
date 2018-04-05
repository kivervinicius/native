import React from 'react'
import {SafeAreaView, ScrollView, View} from 'react-native'

import Section from './Section'
import $styles from './styles'

function renderElement(Element, props = {}) {
  if (React.isValidElement(Element)) return Element
  return <Element {...props} />
}

function Shell({styles, children, header, footer, scroll, ...props}) {
  const Main = scroll ? ScrollView : View
  return (
    <SafeAreaView style={styles.container}>
      {header && (
        <View style={styles.header}>{renderElement(header, props)}</View>
      )}
      <Main style={styles.main}>{children}</Main>
      {footer && (
        <View style={styles.footer}>{renderElement(footer, props)}</View>
      )}
    </SafeAreaView>
  )
}

export {Section}

export default $styles.inject()(Shell)
