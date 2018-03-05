import {fork, all} from 'redux-saga/effects'
import auth from './auth/saga'
import fabric from './fabric/saga'

export default function* root() {
  yield all([fork(auth), fork(fabric)])
}
