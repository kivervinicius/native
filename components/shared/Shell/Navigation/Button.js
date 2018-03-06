import {TouchableOpacity, Text} from 'react-native'

import styles from './styles'

export default function NavButton({children, ...props}) {
  return (
    <TouchableOpacity {...props}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}
