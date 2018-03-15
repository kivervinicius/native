import Shell from '@/containers/shared/Shell'
import Listing from '@/containers/listings/View'

export default function ListingScreen({navigation}) {
  return (
    <Shell scroll>
      <Listing id={navigation.state.params.id} />
    </Shell>
  )
}

export const screen = ListingScreen
