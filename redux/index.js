import {createStore, applyMiddleware, compose} from 'redux'
import {persistStore} from 'redux-persist'
import createSagaMiddleware, {END} from 'redux-saga'

import reducer from './modules/reducer'
import saga from './modules/saga'

export default function create() {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]
  const finalCreateStore = compose(applyMiddleware(...middleware))(createStore)
  const store = finalCreateStore(reducer)
  store.persistor = persistStore(store)
  store.runSaga = (_) => {
    store.task = sagaMiddleware.run(_)
  }
  store.close = () => store.dispatch(END)
  store.runSaga(saga)
  if (module.hot) {
    module.hot.accept('./modules/reducer.js', () =>
      store.replaceReducer(require('./modules/reducer').default)
    )
    module.hot.accept('./modules/saga.js', () => {
      store.task.cancel()
      store.runSaga(require('./modules/saga').default)
    })
  }
  return store
}

// Create store outside entry point to avoid creating a new one on HMR
export const store = create()
export const persistor = store.persistor
