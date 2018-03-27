import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import Screen from '@/components/listings/Search/Screen'

export default class SearchScreenApp extends Component {
  onSubmit = () => {
    const {navigation} = this.props
    navigation.navigate('results', navigation.state.params)
  }

  render() {
    return (
      <Shell>
        <Screen {...this.props} onSubmit={this.onSubmit} />
      </Shell>
    )
  }
}
