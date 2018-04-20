import React, {Component} from 'react'
import {withNavigationFocus} from 'react-navigation'

import Shell from '@/containers/shared/Shell'
import Login from '@/containers/auth/Login'

@withNavigationFocus
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
    const {navigation} = this.props
    navigation.navigate('resetPassword')
  }

  render() {
    const {isFocused} = this.props
    return (
      <Shell scroll title="Login">
        <Login
          enabled={isFocused}
          onSignUp={this.onSignUp}
          onPasswordRecovery={this.onPasswordRecovery}
          onSuccess={this.onSuccess}
        />
      </Shell>
    )
  }
}

export const screen = LoginScreen
