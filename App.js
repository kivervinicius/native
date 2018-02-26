import {Provider} from 'react-redux'
import {StackNavigator} from 'react-navigation'

import createStore from '@/redux'
import * as views from '@/components/views'

const Stack = StackNavigator(views, {
  initialRouteName: 'home'
})

const store = createStore()

export default function App() {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  )
}
