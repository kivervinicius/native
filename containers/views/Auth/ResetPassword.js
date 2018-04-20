import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import ResetPassword from '@/containers/auth/ResetPassword'

export default class ResetPasswordScreen extends Component {
  onSuccess = () => {
    const {navigation} = this.props
    navigation.goBack()
  }

  render() {
    return (
      <Shell scroll title="Lembrar Senha">
        <ResetPassword onSuccess={this.onSuccess} />
      </Shell>
    )
  }
}

export const screen = ResetPasswordScreen
