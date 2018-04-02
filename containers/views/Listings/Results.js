import {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import Shell from '@/containers/shared/Shell'
import Listings from '@/containers/listings/Feed'
import MapButton from '@/components/listings/Map/Button'
import InfiniteScroll from '@/components/shared/InfiniteScroll'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 20
  }
})

export default class ListingsScreen extends Component {
  onOpenMap = () => {
    const {navigation} = this.props
    navigation.navigate('map', navigation.state.params)
  }

  render() {
    const {navigation} = this.props

    return (
      <Shell>
        <View style={styles.container}>
          <Listings
            type="search"
            params={navigation.state.params}
            as={InfiniteScroll}
          />
          <MapButton style={styles.button} onPress={this.onOpenMap} />
        </View>
      </Shell>
    )
  }
}

export const screen = ListingsScreen
