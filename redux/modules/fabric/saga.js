import {takeLatest, all, fork, select} from 'redux-saga/effects'
import {Crashlytics} from 'react-native-fabric'

import {getUser} from '../auth/selectors'
import * as auth from '../auth'

function identifySession({data}) {
  Crashlytics.setUserName(data.name)
  Crashlytics.setUserEmail(data.email)
  Crashlytics.setUserIdentifier(data.id)
}

function* initialize() {
  const data = yield select(getUser)
  if (data) yield fork(identifySession, {data})
}

export default function* fabricSaga() {
  yield all([takeLatest(auth.SUCCESS, identifySession), fork(initialize)])
}
