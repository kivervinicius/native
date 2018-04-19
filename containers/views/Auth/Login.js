import React, {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import Login from '@/containers/auth/Login'

export default class LoginScreen extends Component {
  state = {
    valid: true
  }

  form = React.createRef()

  onValidate = (valid) => this.setState({valid})

  onSuccess = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  onSignUp = () => {
    const {navigation} = this.props
    navigation.navigate('signUp')
  }

  onPasswordRecovery = () => {
    // const {navigation} = this.props
    // navigation.navigate('passwordReset')
  }

  render() {
    return (
      <Shell scroll title="Login">
        <Login
          onSignUp={this.onSignUp}
          onPasswordRecovery={this.onPasswordRecovery}
          onSuccess={this.onSuccess}
        />
      </Shell>
    )
  }
}

export const screen = LoginScreen
