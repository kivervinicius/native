import {Component} from 'react'
import {NavigationActions} from 'react-navigation'

import Header from '@/components/shared/Header'
import * as route from '@/lib/route'

export default class HeaderApp extends Component {
  onSearchOptions = () => {
    const {navigation} = this.props
    navigation.navigate(
      'listings',
      null,
      NavigationActions.navigate({
        routeName: 'search',
        params: route.last(navigation).params
      })
    )
  }

  render() {
    return <Header onSearchOptions={this.onSearchOptions} />
  }
}
