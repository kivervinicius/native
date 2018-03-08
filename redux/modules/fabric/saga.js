import {Platform} from 'react-native'
import {takeLatest, all, fork, select} from 'redux-saga/effects'
import {Crashlytics} from 'react-native-fabric'
import {init as initErrorReporting} from 'react-native-fabric-crashlytics'

import {getUser} from '../auth/selectors'
import * as auth from '../auth'
import * as actions from './index'

function reportError({error}) {
  if (!__DEV__) {
    let message = error.trace || error.message
    if (typeof message !== 'string') message = message.toString()
    if (Platform.OS === 'ios') {
      Crashlytics.reportError(message)
    } else {
      Crashlytics.logException(message)
    }
  }
  // eslint-disable-next-line no-console
  console.error(error)
}

function identifySession({data}) {
  Crashlytics.setUserName(data.name)
  Crashlytics.setUserEmail(data.email)
  Crashlytics.setUserIdentifier(data.id)
}

function* initialize() {
  const data = yield select(getUser)
  if (data) yield fork(identifySession, {data})
  // Send uncaught errors to Crashlytics
  initErrorReporting()
}

export default function* fabricSaga() {
  yield all([
    takeLatest(auth.SUCCESS, identifySession),
    takeLatest(actions.REPORT_ERROR, reportError),
    fork(initialize)
  ])
}
