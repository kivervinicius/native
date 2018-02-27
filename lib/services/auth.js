import {post} from '../api'

export default signIn({email, password}) {
  try {
    response = await post('/users/login', {
      user: {email, password}
    })
    console.log(response)
  } catch(e) {
    console.log(e)
  }
}
