import {View} from 'react-native'

import Text from '@/components/shared/Text'
import Form, {Email, Password, TextInput} from '@/components/shared/Form'
import styles from './styles'

const getError = (error) => {
  if (!error) return undefined
  switch (error.status) {
    case 422:
      return 'Esse e-mail já está em uso.'
    default:
      return 'Ocorreu um erro desconhecido. Por favor, tente novamente.'
  }
}

export default function SignUpForm({onSubmit, error}) {
  const errorMessage = getError(error)
  return (
    <Form onSubmit={onSubmit}>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <TextInput
        validations={{required: 'O nome é obrigatório'}}
        name="name"
        placeholder="Nome"
      />
      <Email name="email" />
      <Password name="password" />
    </Form>
  )
}
