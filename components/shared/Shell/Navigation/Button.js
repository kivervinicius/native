import {TouchableOpacity, Text} from 'react-native'

import styles from './styles'

export default function NavButton({children, ...props}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}
