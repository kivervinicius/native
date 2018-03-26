import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import Form from '@/containers/interest/Form'

export default class InterestFormScreen extends Component {
  onReturn = () => {
    const {navigation} = this.props
    navigation.goBack()
  }

  render() {
    const {navigation} = this.props
    return (
      <Shell>
        <Form id={navigation.state.params.id} onReturn={this.onReturn} />
      </Shell>
    )
  }
}

export const screen = InterestFormScreen
