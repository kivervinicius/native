import {StackNavigator} from 'react-navigation'

import * as login from './Login'
import * as signUp from './SignUp'

export const screen = StackNavigator(
  {login, signUp},
  {
    initialRouteName: 'login',
    headerMode: 'none'
  }
)
