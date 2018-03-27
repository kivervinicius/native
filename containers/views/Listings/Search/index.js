import {StackNavigator} from 'react-navigation'

import fields from './fields'
import * as menu from './Menu'

export const screen = StackNavigator(
  {
    menu,
    ...fields
  },
  {
    initialRouteName: 'menu',
    headerMode: 'none'
  }
)
