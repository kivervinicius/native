import TextInput from '@/components/shared/TextInput'
import styles from '../styles'

export default function Email({onChange, ...props}) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="email-address"
      placeholder="Email"
      onChangeText={onChange}
      {...props}
    />
  )
}
