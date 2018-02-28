import {Component} from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {StackNavigator} from 'react-navigation'

import {store, persistor} from '@/redux'
import Header from '@/containers/shared/Header'
import * as views from '@/containers/views'

const Stack = StackNavigator(views, {
  initialRouteName: 'home',
  headerMode: 'screen',
  navigationOptions: {
    title: 'EmCasa',
    header: (props) => <Header {...props} />
  }
})

export default class App extends Component {
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
