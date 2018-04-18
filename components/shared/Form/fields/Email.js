import {email} from '@/lib/validations'
import TextInput from '@/components/shared/TextInput'
import {field} from '../Context/Consumer'

export default field({
  validations: [email]
})(({onChange, ...props}) => (
  <TextInput
    {...props}
    keyboardType="email-address"
    placeholder="Email"
    autoCapitalize="none"
    onChangeText={onChange}
  />
))
