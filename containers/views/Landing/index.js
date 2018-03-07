import {Text} from 'react-native'

import Shell from '@/containers/shared/Shell'
import Listings from '@/containers/listings/Feed'

export default function LandingScreen() {
  return (
    <Shell>
      <Text style={{textAlign: 'center'}}>Hello World</Text>
      <Listings type="featured" />
    </Shell>
  )
}

export const screen = LandingScreen

export const navigationProps = () => ({
  title: 'EmCasa'
})
