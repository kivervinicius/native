import {SwitchNavigator} from 'react-navigation'

import * as form from './Form'
import * as message from './Message'

export const screen = SwitchNavigator(
  {form, message},
  {
    initialRouteName: 'form',
    resetOnBlur: false
  }
)

export default screen
