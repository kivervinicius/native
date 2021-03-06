import {Component} from 'react'
import {View} from 'react-native'

import Shell from '@/containers/shared/Shell'
import Listings, {Results} from '@/containers/listings/Feed'
import InfiniteScroll from '@/components/shared/InfiniteScroll'
import MapButton from '@/components/listings/Map/Button'
import styles from './styles'

export default class ListingsScreen extends Component {
  onOpenMap = () => {
    const {navigation} = this.props
    navigation.navigate('map', navigation.state.params)
  }

  render() {
    const {navigation} = this.props

    return (
      <Shell root title="Buscar imóveis">
        <View style={styles.container}>
          <Listings
            type="search"
            params={navigation.state.params}
            as={InfiniteScroll}
            ListHeaderComponent={Results}
          />
          <MapButton style={styles.mapButton} onPress={this.onOpenMap} />
        </View>
      </Shell>
    )
  }
}

export const screen = ListingsScreen
