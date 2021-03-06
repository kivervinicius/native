import Text from '@/components/shared/Text'
import Form, {Email} from '@/components/shared/Form'
import styles from './styles'

const getError = (error) => {
  if (!error) return undefined
  switch (error.status) {
    case 404:
      return 'Esse e-mail não está cadastrado.'
    default:
      return 'Ocorreu um erro desconhecido. Por favor, tente novamente.'
  }
}

export default function SignUpForm({onSubmit, error}) {
  const errorMessage = getError(error)
  return (
    <Form onSubmit={onSubmit}>
      <Text style={styles.paragraph}>
        Digite abaixo o e-mail cadastrado e vamos te ajudar a criar uma senha
        nova.
      </Text>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <Email name="email" />
    </Form>
  )
}
