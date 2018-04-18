import React, {Component} from 'react'

import Shell, {Footer} from '@/containers/shared/Shell'
import Login from '@/containers/auth/Login'

export default class LoginScreen extends Component {
  form = React.createRef()

  onSubmit = (...args) => this.form.value.onSubmit(...args)

  onSignUp = () => {
    // const {navigation} = this.props
    // navigation.navigate('signUp')
  }

  onPasswordRecovery = () => {
    // const {navigation} = this.props
    // navigation.navigate('passwordReset')
  }

  render() {
    return (
      <Shell
        scroll
        title="Login"
        footer={<Footer label="Enviar" onPress={this.onSubmit} />}
      >
        <Login
          innerRef={this.form}
          onSignUp={this.onSignUp}
          onPasswordRecovery={this.onPasswordRecovery}
        />
      </Shell>
    )
  }
}

export const screen = LoginScreen
