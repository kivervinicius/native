import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import Message from '@/components/interest/Message'

export default class InterestMessageScreen extends Component {
  onDismiss = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  render() {
    return (
      <Shell>
        <Message onDismiss={this.onDismiss} />
      </Shell>
    )
  }
}

export const screen = InterestMessageScreen
