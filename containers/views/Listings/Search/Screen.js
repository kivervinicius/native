import {Component} from 'react'

import Screen from '@/components/listings/Search/Screen'

export default class SearchScreenApp extends Component {
  onSubmit = () => {
    const {navigation, onSubmit} = this.props
    if (onSubmit) onSubmit(navigation.state.params)
  }

  onNavigate = () => {
    const {navigation, to} = this.props
    navigation.navigate('listings')
    if (to) navigation.navigate(to, navigation.state.params)
    else navigation.goBack(null)
  }

  render() {
    return (
      <Screen
        {...this.props}
        onNavigate={this.onNavigate}
        onSubmit={this.onSubmit}
      />
    )
  }
}
