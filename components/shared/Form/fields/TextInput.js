import BaseTextInput from '@/components/shared/TextInput'
import {field} from '../Context'

export const TextInput = field(({onChange, ...props}) => (
  <BaseTextInput {...props} onChangeText={onChange} />
))
