import {put, call, all, takeLatest} from 'redux-saga/effects'

import * as api from '@/lib/services/listings'
import * as actions from './index'

const pagination = (res) => ({
  currentPage: res.page_number || 0,
  pageSize: res.page_size,
  totalPages: res.total_pages,
  totalEntries: res.total_entries
})

function* load({key, options}) {
  yield put(actions.loading(key, options))
  try {
    const response = yield call(api[key], options)
    yield put(actions.success(key, response.listings, pagination(response)))
  } catch (err) {
    yield put(actions.failure(key, err))
  }
}

export default function* listingsFeedSaga() {
  yield all([takeLatest(actions.REQUEST, load)])
}
