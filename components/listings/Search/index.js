import {SwitchNavigator} from 'react-navigation'

import fields from './fields'
import * as menu from './Menu'

export default SwitchNavigator(
  {
    menu,
    ...fields
  },
  {
    initialRouteName: 'menu'
  }
)
