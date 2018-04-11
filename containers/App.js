import {Component} from 'react'
import {Platform, StatusBar} from 'react-native'
import {StackNavigator} from 'react-navigation'

import OrientationProvider from '@/containers/shared/Orientation/Provider'
import views from '@/containers/views'

const Stack = StackNavigator(views, {
  initialRouteName: 'listings',
  initialRouteParams: {},
  headerMode: 'float',
  navigationOptions: {
    header: null
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
    return (
      <OrientationProvider>
        <Stack />
      </OrientationProvider>
    )
  }
}
