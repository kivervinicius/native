import {post} from '../api'

export async function signIn({email, password}) {
  return post('/users/login', {
    user: {email, password}
  })
}
