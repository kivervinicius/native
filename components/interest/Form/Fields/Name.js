import TextInput from '@/components/shared/TextInput'
import styles from '../styles'

export default function Name({onChange, ...props}) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Nome"
      onChangeText={onChange}
      {...props}
    />
  )
}

Name.validate = (value) => value != ''
