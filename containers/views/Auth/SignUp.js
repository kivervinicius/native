import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import SignUp from '@/containers/auth/SignUp'

export default class SignUpScreen extends Component {
  onSuccess = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  render() {
    return (
      <Shell scroll title="Cadastre-se">
        <SignUp onSuccess={this.onSuccess} />
      </Shell>
    )
  }
}

export const screen = SignUpScreen
