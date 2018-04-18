import TextInput from '@/components/shared/TextInput'
import {field} from '../Context'

export default field(({onChange, ...props}) => (
  <TextInput {...props} onChangeText={onChange} />
))
