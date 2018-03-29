import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import Map from '@/containers/listings/Map'
import Screen from '@/components/listings/Map/Screen'

export default class MapScreen extends Component {
  onDismiss = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  render() {
    return (
      <Shell overlay>
        <Screen onDismiss={this.onDismiss}>
          <Map type="search" />
        </Screen>
      </Shell>
    )
  }
}

export const screen = MapScreen
