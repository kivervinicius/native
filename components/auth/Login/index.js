import {Component} from 'react'
import {View} from 'react-native'

import Text from '@/components/shared/Text'
import Link from '@/components/shared/Link'
import Form, {Field, TextInput} from '@/components/shared/Form'
import styles from './styles'

export default class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit = () => this.props.onSubmit(this.state)

  render() {
    const {onPasswordRecovery, onSignUp} = this.props

    return (
      <Form onChange={this.setState} value={this.state}>
        <View style={styles.container}>
          <Field>
            <TextInput
              name="email"
              keyboardType="email-address"
              placeholder="Email"
              autoCapitalize="none"
            />
          </Field>
          <Field>
            <TextInput secureTextEntry name="password" placeholder="Senha" />
          </Field>
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
