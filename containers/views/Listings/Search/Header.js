import _ from 'lodash'
import {Component} from 'react'
import {NavigationActions} from 'react-navigation'

import Header from '@/components/listings/Search/Header'
import * as route from '@/lib/route'

export default class SearchHeaderApp extends Component {
  onNavigate = () => {
    const {navigation} = this.props
    const {routes} = route.lastStack(navigation.state)
    const last = _.last(routes)
    if (routes.length > 1) {
      const prev = _.nth(routes, -2)
      navigation.dispatch(
        NavigationActions.setParams({
          params: last.params,
          key: prev.key
        })
      )
    }
    navigation.goBack(null)
  }

  onReset = () => {
    const {navigation} = this.props
    navigation.dispatch(
      NavigationActions.setParams({
        params: {
          price: undefined,
          area: undefined,
          rooms: undefined,
          neighborhoods: undefined
        },
        key: route.last(navigation.state).key
      })
    )
  }

  render() {
    const {navigation} = this.props
    const isRoot = navigation.state.routes.length == 1
    return (
      <Header
        root={isRoot}
        onNavigate={this.onNavigate}
        onReset={this.onReset}
      />
    )
  }
}
