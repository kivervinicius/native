import {StackNavigator} from 'react-navigation'

import Header from './Header'
import * as menu from './Menu'
import fields from './fields'

export const screen = StackNavigator(
  {
    menu,
    ...fields
  },
  {
    initialRouteName: 'menu',
    initialRouteParams: {},
    headerMode: 'float',
    navigationOptions: {
      header: (props) => <Header {...props} />
    }
  }
)
