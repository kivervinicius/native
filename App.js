import {StackNavigator} from 'react-navigation'
import {Landing, Listings} from '@/src/components/views'

export default StackNavigator(
  {
    Landing: {
      screen: Landing
    },
    Listings: {
      screen: Listings
    }
  },
  {
    initialRouteName: 'Landing'
  }
)
