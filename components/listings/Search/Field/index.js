import {View, TouchableOpacity} from 'react-native'

import Text from '@/components/shared/Text'
import styles from './styles'

export default function SearchField({children, title, onClear}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <TouchableOpacity onPress={onClear}>
          <Text style={styles.button}>Limpar</Text>
        </TouchableOpacity>
      </View>
      {children && <View>{children}</View>}
    </View>
  )
}

export {default as MultiSelect} from './MultiSelect'
export {default as SelectRange} from './SelectRange'
export {default as SlideRange} from './SlideRange'
