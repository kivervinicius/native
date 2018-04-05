import {Component} from 'react'

import Shell, {Footer} from '@/containers/shared/Shell'
import Message from '@/components/interest/Message'

export default class InterestMessageScreen extends Component {
  onDismiss = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  render() {
    return (
      <Shell
        footer={<Footer label="Ok" color="green" onPress={this.onDismiss} />}
      >
        <Message />
      </Shell>
    )
  }
}

export const screen = InterestMessageScreen
