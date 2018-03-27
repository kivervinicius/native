import {Component} from 'react'

import Menu from '@/components/listings/Search/Menu'
import Screen from './Screen'

export default class MenuScreen extends Component {
  onSelect = (name) => () => {
    const {navigation} = this.props
    navigation.navigate(name, navigation.state.params)
  }

  render() {
    return (
      <Screen {...this.props}>
        <Menu onSelect={this.onSelect} />
      </Screen>
    )
  }
}

export const screen = MenuScreen
