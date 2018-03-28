import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import Listings from '@/containers/listings/Feed'
import MapButton from '@/components/listings/Map/Button'
import InfiniteScroll from '@/components/shared/InfiniteScroll'

export default class ListingsScreen extends Component {
  onOpenMap = () => {
    const {navigation} = this.props
    navigation.navigate('map', navigation.state.params)
  }

  render() {
    const {navigation} = this.props

    return (
      <Shell>
        <Listings
          type="search"
          params={navigation.state.params}
          loader={<InfiniteScroll />}
        />
        <MapButton onPress={this.onOpenMap} />
      </Shell>
    )
  }
}

export const screen = ListingsScreen
