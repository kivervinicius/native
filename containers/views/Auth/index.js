import {StackNavigator} from 'react-navigation'

import * as login from './Login'
import * as signUp from './SignUp'
import * as resetPassword from './ResetPassword'

export const screen = StackNavigator(
  {login, signUp, resetPassword},
  {
    initialRouteName: 'login',
    headerMode: 'none'
  }
)
