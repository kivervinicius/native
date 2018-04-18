import {Component} from 'react'
import {View} from 'react-native'

import Shell from '@/containers/shared/Shell'
import Map from '@/containers/listings/Map'
import Feed from './Feed'
import styles from './styles'

export default class MapScreen extends Component {
  onSelect = (id) => {
    const {navigation} = this.props
    if (id === this.activeId) navigation.setParams({id: null})
    else navigation.setParams({id})
  }

  onDismiss = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  get activeId() {
    return this.props.navigation.state.params.id
  }

  render() {
    const {navigation} = this.props
    const active = this.activeId

    return (
      <Shell overlay footer={null}>
        <View style={styles.body}>
          <Map onSelect={this.onSelect} active={active} type="search" />
        </View>
        <View style={styles.listings}>
          <Feed
            active={active}
            type="search"
            params={navigation.state.params}
          />
        </View>
      </Shell>
    )
  }
}

export const screen = MapScreen
