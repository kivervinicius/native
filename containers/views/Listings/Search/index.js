import {SwitchNavigator} from 'react-navigation'

import fields from './fields'
import * as menu from './Menu'

export const screen = SwitchNavigator(
  {
    menu,
    ...fields
  },
  {
    initialRouteName: 'menu',
    headerMode: 'none'
  }
)
