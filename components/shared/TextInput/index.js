import {View, TextInput} from 'react-native'

import $styles from './styles'

export default $styles.inject()(({styles, style, ...props}) => (
  <View style={styles.container.concat(style)}>
    <TextInput
      style={styles.input}
      underlineColorAndroid="rgba(0,0,0,0)"
      {...props}
    />
  </View>
))
