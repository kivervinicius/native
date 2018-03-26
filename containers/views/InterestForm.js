import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import Form from '@/containers/interest/Form'

export default class InterestFormScreen extends Component {
  onDismiss = () => {
    const {navigation} = this.props
    navigation.goBack()
  }

  render() {
    const {navigation} = this.props
    return (
      <Shell>
        <Form id={navigation.state.params.id} onDismiss={this.onDismiss} />
      </Shell>
    )
  }
}

export const screen = InterestFormScreen
