import {Component} from 'react'

import Shell, {Footer} from '@/containers/shared/Shell'
import Form from '@/containers/interest/Form'

export default class InterestFormScreen extends Component {
  state = {
    valid: false
  }

  onValidate = (valid) => this.setState({valid})

  onDismiss = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  onSubmit = () => {
    const {navigation} = this.props
    this.form.onSubmit()
    navigation.navigate('message')
  }

  onOpenCalendly = () => {
    const {navigation} = this.props
    navigation.navigate('calendly')
  }

  formRef = (element) => {
    this.form = element
  }

  render() {
    const {navigation} = this.props
    const {valid} = this.state

    return (
      <Shell
        footer={
          <Footer disabled={!valid} label="Enviar" onPress={this.onSubmit} />
        }
      >
        <Form
          innerRef={this.formRef}
          id={navigation.state.params.id}
          onDismiss={this.onDismiss}
          onValidate={this.onValidate}
          onOpenCalendly={this.onOpenCalendly}
        />
      </Shell>
    )
  }
}

export const screen = InterestFormScreen
