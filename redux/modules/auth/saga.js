import {put, call, race, fork, take, takeLatest, all} from 'redux-saga/effects'

import * as api from '@/lib/services/auth'
import * as actions from './index'

function* request(fun, params) {
  yield put(actions.request())
  try {
    const {user} = yield call(fun, params)
    yield put(actions.success(user))
  } catch (err) {
    yield put(actions.failure(err))
  }
}

function* load(...args) {
  yield race({
    task: fork(request, ...args),
    cancel: take(actions.RESET)
  })
}

function* signIn({email, password}) {
  yield fork(load, api.signIn, {email, password})
}

function* signUp({name, email, password}) {
  yield fork(load, api.signIn, {name, email, password})
}

export default function* authSaga() {
  yield all([
    takeLatest(actions.SIGN_IN, signIn),
    takeLatest(actions.SIGN_UP, signUp)
  ])
}
