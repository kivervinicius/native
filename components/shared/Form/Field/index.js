import React from 'react'
import {View, KeyboardAvoidingView} from 'react-native'

import styles from './styles'

export default function Field({children}) {
  return (
    <KeyboardAvoidingView>
      {React.Children.map(children, (child) => (
        <View style={styles.child}>{child}</View>
      ))}
    </KeyboardAvoidingView>
  )
}
