import {Component} from 'react'
import {View} from 'react-native'

import Shell from '@/containers/shared/Shell'
import Listings from '@/containers/listings/Feed'
import InfiniteScroll from '@/components/shared/InfiniteScroll'

export default class ListingsScreen extends Component {
  render() {
    const {navigation} = this.props

    return (
      <Shell>
        <View>
          <Listings
            type="search"
            params={navigation.state.params}
            as={InfiniteScroll}
          />
        </View>
      </Shell>
    )
  }
}

export const screen = ListingsScreen
