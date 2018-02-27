import {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Button} from 'react-native'

export default class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = (field) => (value) => this.setState({[field]: value})

  onChangeEmail = this.onChange('email')
  onChangePassword = this.onChange('password')

  onSubmit = () => this.props.onSubmit(this.state)

  render() {
    const {email, password} = this.state
    return (
      <KeyboardAvoidingView>
        <TextInput
          autoFocus
          keyboardType="email-address"
          placeholder="Email"
          value={email}
          onChangeText={this.onChangeEmail}
        />
        <TextInput
          secureTextEntry
          placeholder="Senha"
          value={password}
          onChangeText={this.onChangePassword}
        />
        <Button title="Login" onPress={this.onSubmit} />
      </KeyboardAvoidingView>
    )
  }
}
