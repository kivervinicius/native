import {View, TouchableOpacity} from 'react-native'

import Text from '@/components/shared/Text'

export default function SearchField({children, title, onReset}) {
  return (
    <View>
      <View>
        <Text>{title}</Text>
        <TouchableOpacity onPress={onReset}>
          <Text>Limpar</Text>
        </TouchableOpacity>
      </View>
      {children && <View>{children}</View>}
    </View>
  )
}

export {default as Select} from './Select'
export {default as SlideRange} from './SlideRange'
