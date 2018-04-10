import {Component} from 'react'
import Shell from '@/containers/shared/Shell'
import Listings, {Results} from '@/containers/listings/Feed'
import InfiniteScroll from '@/components/shared/InfiniteScroll'

export default class ListingsScreen extends Component {
  render() {
    const {navigation} = this.props

    return (
      <Shell title="Início" root>
        <Listings
          type="search"
          params={navigation.state.params}
          as={InfiniteScroll}
          ListHeaderComponent={Results}
        />
      </Shell>
    )
  }
}

export const screen = ListingsScreen
