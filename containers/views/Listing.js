import Shell from '@/containers/shared/Shell'
import Listing from '@/containers/listings/View'

export default function ListingScreen({navigation}) {
  return (
    <Shell>
      <Listing id={navigation.params.id} />
    </Shell>
  )
}

export const screen = ListingScreen

export const path = 'listings/:id'
