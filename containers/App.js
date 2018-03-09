import {Component} from 'react'
import {Platform, StatusBar} from 'react-native'
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
  componentDidMount() {
    StatusBar.setBarStyle('dark-content')
    // Set default statusbar styles
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('white')
    }
  }

  render() {
    return <Stack />
  }
}
