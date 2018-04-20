import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import FormMessage from '@/components/shared/Form/Message'

export default class AuthSuccessScreen extends Component {
  onClose = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  render() {
    const {pageTitle, title, message} = this.props.navigation.state.params
    return (
      <Shell scroll title={pageTitle}>
        <FormMessage title={title} onClose={this.onClose}>
          {message}
        </FormMessage>
      </Shell>
    )
  }
}

export const screen = AuthSuccessScreen
