import {StackNavigator} from 'react-navigation'

import * as results from './Results'
import * as search from './Search'

export const screen = StackNavigator(
  {results, search},
  {
    initialRouteName: 'results'
  }
)

export default screen
