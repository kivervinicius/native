import {StackNavigator} from 'react-navigation'

import Header from './Header'
import * as filter from './Filter'

export const screen = StackNavigator(
  {
    filter
  },
  {
    initialRouteName: 'filter',
    initialRouteParams: {},
    headerMode: 'float',
    navigationOptions: {
      header: (props) => <Header {...props} />
    }
  }
)
