import Shell from '@/containers/shared/Shell'
import Listing from '@/containers/listings/View'
import {withNavigationFocus} from 'react-navigation'

export default function ListingScreen({navigation, isFocused}) {
  return (
    <Shell scroll>
      <Listing active={isFocused} id={navigation.state.params.id} />
    </Shell>
  )
}

export const screen = withNavigationFocus(ListingScreen)
