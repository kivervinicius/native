import {Component} from 'react'
import {NavigationActions} from 'react-navigation'
import withNavigation from 'react-navigation/src/views/withNavigation'

import Header from '@/components/shared/Header'
import * as route from '@/lib/route'

@withNavigation
export default class HeaderApp extends Component {
  onSearchOptions = () => {
    const {navigation} = this.props
    navigation.navigate(
      'listings',
      null,
      NavigationActions.navigate({
        routeName: 'search',
        params: route.last(navigation.state).params
      })
    )
  }

  render() {
    return <Header onSearchOptions={this.onSearchOptions} />
  }
}
