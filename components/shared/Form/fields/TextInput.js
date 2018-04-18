import TextInput from '@/components/shared/TextInput'
import {field} from '../Context/Consumer'

export default field()(({onChange, ...props}) => (
  <TextInput {...props} onChangeText={onChange} />
))
