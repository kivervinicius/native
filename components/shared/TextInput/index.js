import {TextInput} from 'react-native'

import $styles from './styles'

export default $styles.inject()(({styles, style, ...props}) => (
  <TextInput style={styles.container.concat(style)} {...props} />
))
