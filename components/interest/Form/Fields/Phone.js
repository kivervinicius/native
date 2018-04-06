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

Phone.validate = (value) => {
  return false
}
