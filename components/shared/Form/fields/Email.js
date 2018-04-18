import {email} from '@/lib/validations'
import TextInput from '@/components/shared/TextInput'
import {field} from '../Context/Consumer'

export default field({
  validations: [email]
})(({onChange, valid, ...props}) => (
  <TextInput
    {...props}
    invalid={!valid}
    keyboardType="email-address"
    placeholder="Email"
    autoCapitalize="none"
    onChangeText={onChange}
  />
))
