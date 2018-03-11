import {fork, all} from 'redux-saga/effects'
import fabric from './fabric/saga'
import auth from './auth/saga'
import listings from './listings/saga'
import neighborhoods from './neighborhoods/saga'

export default function* root() {
  yield all([fork(fabric), fork(auth), fork(listings), fork(neighborhoods)])
}
