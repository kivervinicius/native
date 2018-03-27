import {Component} from 'react'

import Screen from '@/components/listings/Search/Screen'

export default class SearchScreenApp extends Component {
  onSubmit = () => {
    const {navigation} = this.props
    navigation.navigate('results', navigation.state.params)
  }

  render() {
    return <Screen {...this.props} onSubmit={this.onSubmit} />
  }
}
