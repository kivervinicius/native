import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import Form from '@/containers/interest/Form'

export default class InterestFormScreen extends Component {
  onDismiss = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  onSuccess = (err) => {
    const {navigation} = this.props
    if (!err) navigation.navigate('message')
  }

  onOpenCalendly = () => {
    const {navigation} = this.props
    navigation.navigate('calendly')
  }

  render() {
    const {navigation} = this.props
    return (
      <Shell>
        <Form
          id={navigation.state.params.id}
          onSubmitSuccess={this.onSuccess}
          onDismiss={this.onDismiss}
          onOpenCalendly={this.onOpenCalendly}
        />
      </Shell>
    )
  }
}

export const screen = InterestFormScreen
