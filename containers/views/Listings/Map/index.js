import {Component} from 'react'
import {View} from 'react-native'

import Shell from '@/containers/shared/Shell'
import RelatedListings from '@/containers/listings/Related'
import Map from '@/containers/listings/Map'
import ActionButton from '@/components/listings/Map/ActionButton'
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
    const active = this.activeId

    return (
      <Shell overlay>
        <View style={styles.container}>
          <View style={styles.body}>
            <Map onSelect={this.onSelect} active={active} type="search" />
          </View>
          {active ? (
            <View style={styles.listings}>
              <RelatedListings id={active} />
            </View>
          ) : (
            <ActionButton
              style={styles.actionButton}
              icon="chevron-left"
              onPress={this.onDismiss}
            >
              Ver listagem de imóveis
            </ActionButton>
          )}
        </View>
      </Shell>
    )
  }
}

export const screen = MapScreen
