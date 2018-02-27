import {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Button, View, Text} from 'react-native'

import ResponseError from '@/lib/api/ResponseError'

export default class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = (field) => (value) => this.setState({[field]: value})

  onChangeEmail = this.onChange('email')
  onChangePassword = this.onChange('password')

  onSubmit = () => this.props.onSubmit(this.state)

  get errorMessage() {
    const {error} = this.props
    if (!error) return null
    if (!(error instanceof ResponseError))
      return `An unexpected error occurred: ${error.message}`
    if (error.status === 401) return 'Wrong email or password.'
    else return 'Unknown error. Please try again.'
  }

  render() {
    const {email, password, loading, error} = this.state
    return (
      <KeyboardAvoidingView>
        {error && (
          <View>
            <Text>${this.errorMessage}</Text>
          </View>
        )}
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
        <Button disabled={loading} title="Login" onPress={this.onSubmit} />
      </KeyboardAvoidingView>
    )
  }
}
