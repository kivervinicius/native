import {Component} from 'react'
import {NavigationActions} from 'react-navigation'

import Header from '@/components/shared/Header'

export default class HeaderApp extends Component {
  onSearchOptions = () => {
    const {navigation} = this.props
    navigation.navigate(
      'listings',
      null,
      NavigationActions.navigate({routeName: 'search'})
    )
  }

  render() {
    return <Header onSearchOptions={this.onSearchOptions} />
  }
}
