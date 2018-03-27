import {SwitchNavigator} from 'react-navigation'

import fields from './fields'
import Menu from './Menu'

export default SwitchNavigator(
  {
    menu: {screen: Menu},
    ...fields
  },
  {
    initialRouteName: 'menu'
  }
)
