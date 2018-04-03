import {View, TouchableOpacity} from 'react-native'

import Text from '@/components/shared/Text'
import $styles from './styles'

function Button({styles, children, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default $styles.inject()(Button)
