import {Text} from 'react-native'

import Shell from '@/components/shared/Shell'

export default function LandingScreen() {
  return (
    <Shell>
      <Text style={{textAlign: 'center'}}>Hello World</Text>
    </Shell>
  )
}

export const screen = LandingScreen

export const navigationProps = () => ({
  title: 'EmCasa'
})
