import TextInput from '@/components/shared/TextInput'
import {validate} from 'email-validator'
import styles from '../styles'

export default function Email({onChange, ...props}) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="email-address"
      placeholder="Email"
      autoCapitalize="none"
      onChangeText={onChange}
      {...props}
    />
  )
}

Email.validate = (value) => {
  if (!value) return 'Este campo é obrigatório'
  if (!validate(value)) return 'Este email é inválido'
  return null
}
