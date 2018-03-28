import Shell from '@/containers/shared/Shell'
import Listings from '@/containers/listings/Feed'
import InfiniteScroll from '@/components/shared/InfiniteScroll'

export default function ListingsScreen(props) {
  return (
    <Shell>
      <Listings
        type="search"
        params={props.navigation.state.params}
        loader={<InfiniteScroll />}
      />
    </Shell>
  )
}

export const screen = ListingsScreen
