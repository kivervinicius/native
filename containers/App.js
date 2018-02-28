import {StackNavigator} from 'react-navigation'

import Header from '@/containers/shared/Header'
import * as views from '@/containers/views'

export default StackNavigator(views, {
  initialRouteName: 'home',
  headerMode: 'screen',
  navigationOptions: {
    title: 'EmCasa',
    header: (props) => <Header {...props} />
  }
})
