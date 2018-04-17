import _ from 'lodash'
import {Component} from 'react'
import {View} from 'react-native'

import Shell from '@/containers/shared/Shell'
import Map from '@/containers/listings/Map'
import Feed from './Feed'
import styles from './styles'

export default class MapScreen extends Component {
  state = {
    zoom: 0
  }

  onRegionChange = _.debounce((region) => {
    const zoom = (region.latitudeDelta + region.longitudeDelta) / 2
    this.setState({zoom})
  }, 200)

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
    const {zoom} = this.state
    const active = this.activeId

    return (
      <Shell overlay>
        <View style={styles.body}>
          <Map
            onRegionChange={this.onRegionChange}
            onSelect={this.onSelect}
            distance={zoom * 5}
            aggregate={zoom > 0.01}
            active={active}
            type="search"
          />
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
