import {Component} from 'react'
import {StackNavigator} from 'react-navigation'

import Header from '@/containers/shared/Header'
import views from '@/containers/views'

const Stack = StackNavigator(views, {
  initialRouteName: 'home',
  headerMode: 'float',
  navigationOptions: {
    title: 'EmCasa',
    header: (props) => <Header {...props} />
  }
})

// Wrap StackNavigator in a Component class for hot module replacement
// https://github.com/facebook/react-native/issues/8465
export default class App extends Component {
  render() {
    return <Stack />
  }
}
