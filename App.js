import {Component} from 'react'
import {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {StackNavigator} from 'react-navigation'

import {store, persistor} from '@/redux'
import Header from '@/components/shared/Header'
import * as views from '@/containers/views'

const Stack = StackNavigator(views, {
  initialRouteName: 'home',
  headerMode: 'screen',
  navigationOptions: {
    title: 'EmCasa',
    header: (props) => <Header {...props} />
  }
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Stack />
        </PersistGate>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('EmCasa', () => App)
