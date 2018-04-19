import React, {Component} from 'react'

import Shell, {Footer} from '@/containers/shared/Shell'
import SignUp from '@/containers/auth/SignUp'

export default class SignUpScreen extends Component {
  state = {
    valid: true
  }

  form = React.createRef()

  onValidate = (valid) => this.setState({valid})

  onSuccess = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  onSubmit = (...args) => {
    const {valid} = this.state
    const form = this.form.value
    if (valid) form.onSubmit(...args)
  }

  render() {
    return (
      <Shell
        scroll
        title="Cadastre-se"
        footer={<Footer label="Enviar" onPress={this.onSubmit} />}
      >
        <SignUp
          innerRef={this.form}
          onValidate={this.onValidate}
          onSuccess={this.onSuccess}
        />
      </Shell>
    )
  }
}

export const screen = SignUpScreen
