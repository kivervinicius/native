import {Text} from 'react-native'

import Shell from '@/containers/shared/Shell'
import Listings from '@/containers/listings/Feed'

export default function LandingScreen() {
  return (
    <Shell>
      <Listings type="featured" />
    </Shell>
  )
}

export const screen = LandingScreen

export const navigationOptions = () => ({
  title: 'EmCasa'
})
