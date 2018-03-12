import {put, call, all, race, fork, take, takeLatest} from 'redux-saga/effects'

import ResponseError from '@/lib/api/ResponseError'
import {reportError} from '@/redux/modules/fabric'
import * as api from '@/lib/services/listings'
import * as actions from './index'

const pagination = (res) => ({
  currentPage: res.page_number || 0,
  pageSize: res.page_size,
  totalPages: res.total_pages,
  totalEntries: res.total_entries
})

function* request({key, options}) {
  yield put(actions.request(key, options))
  try {
    const response = yield call(api[key], options)
    yield put(actions.success(key, response.listings, pagination(response)))
  } catch (err) {
    yield put(actions.failure(key, err))
    if (!(err instanceof ResponseError)) yield put(reportError(err))
  }
}

function* load(action) {
  yield race({
    task: fork(request, action),
    cancel: take(actions.RESET)
  })
}

export default function* listingsFeedSaga() {
  yield all([takeLatest(actions.LOAD, load)])
}
