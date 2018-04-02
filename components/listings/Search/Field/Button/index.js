import {TouchableOpacity} from 'react-native'

import Text from '@/components/shared/Text'

export default function ButtonField({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
