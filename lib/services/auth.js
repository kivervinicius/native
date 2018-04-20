import {post} from '../api'

export async function signIn({email, password}) {
  return post('/users/login', {
    user: {email, password}
  })
}

export async function signUp({name, email, password}) {
  return post('/users/register', {
    user: {name, email, password}
  })
}

export async function resetPassword({email}) {
  return post('/users/reset_password', {
    user: {email}
  })
}
