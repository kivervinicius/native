import {put, call, takeLatest, all} from 'redux-saga/effects'

import * as api from '@/lib/services/auth'
import * as actions from './index'

function* signIn({email, password}) {
  yield put(actions.request())
  try {
    const {user} = yield call(api.signIn, {email, password})
    yield put(actions.success(user))
  } catch (err) {
    yield put(actions.failure(err))
  }
}

function* signUp({name, email, password}) {
  yield put(actions.request())
  try {
    const {user} = yield call(api.signUp, {name, email, password})
    yield put(actions.success(user))
  } catch (err) {
    yield put(actions.failure(err))
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(actions.SIGN_IN, signIn),
    takeLatest(actions.SIGN_UP, signUp)
  ])
}
