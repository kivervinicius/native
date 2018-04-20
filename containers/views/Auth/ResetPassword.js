import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import ResetPassword from '@/containers/auth/ResetPassword'

export default class ResetPasswordScreen extends Component {
  onSuccess = ({name}) => {
    const {navigation} = this.props
    const firstName = name.split(' ')[0]
    navigation.replace('success', {
      title: 'Cadastro concluído',
      message: `${firstName}, enviamos um e-mail para você confirmar seu cadastro.`
    })
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
