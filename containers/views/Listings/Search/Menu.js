import {Component} from 'react'

import Menu from '@/components/listings/Search/Menu'
import Screen from './Screen'

export default class MenuScreen extends Component {
  onSelect = (name) => () => {
    const {navigation} = this.props
    navigation.navigate(name, navigation.state.params)
  }

  onDismiss = () => {
    this.props.navigation.goBack(null)
  }

  render() {
    return (
      <Screen {...this.props} onNavigate={this.onDismiss}>
        <Menu onSelect={this.onSelect} />
      </Screen>
    )
  }
}

export const screen = MenuScreen
