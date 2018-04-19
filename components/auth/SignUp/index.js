import {Component} from 'react'
import {View} from 'react-native'

import Text from '@/components/shared/Text'
import Link from '@/components/shared/Link'
import Form, {Email, Password, TextInput} from '@/components/shared/Form'
import styles from './styles'

export default class LoginForm extends Component {
  state = {
    name: '',
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
    const {onValidate} = this.props

    return (
      <Form onChange={this.onChange} onValidate={onValidate} value={this.state}>
        <View style={styles.container}>
          {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
          <TextInput
            validations={{required: 'O nome é obrigatório'}}
            name="name"
            placeholder="Nome"
          />
          <Email name="email" />
          <Password name="password" />
        </View>
      </Form>
    )
  }
}
