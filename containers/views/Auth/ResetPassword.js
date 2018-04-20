import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import ResetPassword from '@/containers/auth/ResetPassword'

export default class SignUpScreen extends Component {
  onSuccess = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  render() {
    return (
      <Shell scroll title="Lembrar Senha">
        <ResetPassword onSuccess={this.onSuccess} />
      </Shell>
    )
  }
}

export const screen = SignUpScreen
