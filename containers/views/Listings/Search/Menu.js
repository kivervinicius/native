import _ from 'lodash/fp'
import {Component} from 'react'

import Menu from '@/components/listings/Search/Menu'
import Screen from './Screen'

const activeParams = _.flow(_.omitBy(_.isEmpty), _.keys)

export default class MenuScreen extends Component {
  onSelect = (name) => () => {
    const {navigation} = this.props
    navigation.navigate(name, navigation.state.params)
  }

  onDismiss = () => {
    this.props.navigation.goBack(null)
  }

  get active() {
    const {navigation} = this.props
    return activeParams(navigation.state.params)
  }

  render() {
    return (
      <Screen {...this.props} onNavigate={this.onDismiss}>
        <Menu active={this.active} onSelect={this.onSelect} />
      </Screen>
    )
  }
}

export const screen = MenuScreen
