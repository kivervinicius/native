import {Component} from 'react'
import {View} from 'react-native'

import Text from '@/components/shared/Text'
import Link from '@/components/shared/Link'
import Form, {Email, TextInput} from '@/components/shared/Form'
import styles from './styles'

export default class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit = () => this.props.onSubmit(this.state)

  onChange = (value) => this.setState(value)

  get errorMessage() {
    const {error} = this.props
    if (!error) return undefined
    switch (error.status) {
      case 401:
        return 'Senha ou email inválidos'
      default:
        return 'Unexpected error'
    }
  }
  render() {
    const {errorMessage} = this
    const {onPasswordRecovery, onSignUp, onValidate} = this.props

    return (
      <Form onChange={this.onChange} onValidate={onValidate} value={this.state}>
        <View style={styles.container}>
          {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
          <Email name="email" />
          <TextInput secureTextEntry name="password" placeholder="Senha" />
          <View style={styles.inlineText}>
            <Link style={styles.text} onPress={onPasswordRecovery}>
              Esqueci a minha senha
            </Link>
          </View>
          <View style={styles.inlineText}>
            <Text style={styles.text}>Não tem cadastro?</Text>
            <Link style={styles.text} onPress={onSignUp}>
              Cadastre-se
            </Link>
          </View>
        </View>
      </Form>
    )
  }
}
