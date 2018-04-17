import _ from 'lodash'
import {Component} from 'react'
import {View} from 'react-native'

import Shell from '@/containers/shared/Shell'
import Map from '@/containers/listings/Map'
import Feed from './Feed'
import styles from './styles'

const zoom = ({longitudeDelta}) => Math.PI * _.round(longitudeDelta, 10) / 180

export default class MapScreen extends Component {
  state = {
    zoom: zoom({longitudeDelta: 0.09999999999993747})
  }

  onRegionChange = _.debounce((region) => {
    this.setState({zoom: zoom(region)})
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
            distance={1000 * zoom}
            aggregate={zoom > 0.0007}
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
