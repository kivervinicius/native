import {StackNavigator} from 'react-navigation'
import Header from '@/components/shared/Header'
import * as views from '@/components/views'

export default StackNavigator(views, {
  initialRouteName: 'home',
  headerMode: 'screen',
  navigationOptions: {
    title: 'EmCasa',
    header: (props) => <Header {...props} />
  }
})
