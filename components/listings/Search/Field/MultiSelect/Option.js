import {TouchableHighlight, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import $styles, {highlightColor} from './styles'

function MultiSelectOption({styles, label, onPress}) {
  return (
    <TouchableHighlight underlayColor={highlightColor} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
        <Icon
          style={$styles.all(styles.text, styles.icon)}
          name="check"
          size={20}
        />
      </View>
    </TouchableHighlight>
  )
}

export default $styles.inject()(MultiSelectOption)
