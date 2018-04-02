import {View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import $styles from './styles'

function MultiSelectOption({styles, label}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Icon
        style={$styles.all(styles.text, styles.icon)}
        name="check"
        size={20}
      />
    </View>
  )
}

export default $styles.inject()(MultiSelectOption)
