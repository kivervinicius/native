import TextInput from '@/components/shared/TextInput'
import styles from '../styles'

export default function Message({onChange, ...props}) {
  return (
    <TextInput
      autoCorrect
      multiline
      numberOfLines={4}
      style={styles.input}
      placeholder="Mensagem (Opcional)"
      onChangeText={onChange}
      {...props}
    />
  )
}
