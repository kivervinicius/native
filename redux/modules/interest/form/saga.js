import {put, call, all, takeLatest} from 'redux-saga/effects'

import * as api from '@/lib/services/interest'
import * as actions from './index'

function* request({id, params}) {
  try {
    const response = yield call(api.create, id, params)
    yield put(actions.success(response.data))
  } catch (err) {
    yield put(actions.failure(err))
  }
}

export default function* interestFormSaga() {
  yield all([takeLatest(actions.REQUEST, request)])
}
