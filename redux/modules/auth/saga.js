import {put, call, takeLatest, all} from 'redux-saga/effects'

import * as api from '@/lib/services/auth'
import * as actions from './index'

function* signIn({email, password}) {
  yield put(actions.request())
  yield call(api.signIn, {email, password})
}

export default function* root() {
  yield all([takeLatest(signIn)])
}
