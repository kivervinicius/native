import TextInput from '@/components/shared/TextInput'
import styles from '../styles'

export default function Phone({onChange, ...props}) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="phone-pad"
      placeholder="Telefone"
      onChangeText={onChange}
      {...props}
    />
  )
}

const countryCode = '(\\+?\\d{1,3}|\\d{1,4})?'
const areaCode = '\\(?\\d{2,3}\\)?'
const number = '\\d{3,5}'
const sep = '[ \\-]?'
const pattern = countryCode + sep + areaCode + sep + number + sep + number
const EXPRESSION = new RegExp(`^${pattern}\\s*$`)

Phone.validate = (value) => EXPRESSION.test(value)
