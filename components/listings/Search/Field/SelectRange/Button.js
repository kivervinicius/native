import {TouchableOpacity, View} from 'react-native'

import Text from '@/components/shared/Text'
import {button as $style} from './styles'

function SelectRangeButton({styles, label, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default $style.inject()(SelectRangeButton)
