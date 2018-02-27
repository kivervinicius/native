import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {StackNavigator} from 'react-navigation'

import createStore from '@/redux'
import * as views from '@/containers/views'

const Stack = StackNavigator(views, {
  initialRouteName: 'home'
})

const store = createStore()

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={store.persistor}>
        <Stack />
      </PersistGate>
    </Provider>
  )
}
