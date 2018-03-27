import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import Form from '@/containers/interest/Form'

export default class InterestFormScreen extends Component {
  onDismiss = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  onFinish = (err) => {
    const {navigation} = this.props
    if (!err) navigation.navigate('message')
  }

  render() {
    const {navigation} = this.props
    return (
      <Shell>
        <Form
          id={navigation.state.params.id}
          onFinish={this.onFinish}
          onDismiss={this.onDismiss}
        />
      </Shell>
    )
  }
}

export const screen = InterestFormScreen
