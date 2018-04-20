export const SIGN_IN = 'auth/SIGN_IN'
export const SIGN_UP = 'auth/SIGN_UP'
export const SIGN_OUT = 'auth/SIGN_OUT'
export const REQUEST = 'auth/REQUEST'
export const SUCCESS = 'auth/SUCCESS'
export const FAILURE = 'auth/FAILURE'
export const RESET = 'auth/RESET'

export const signIn = ({email, password}) => ({
  type: SIGN_IN,
  email,
  password
})
export const signUp = ({name, email, password}) => ({
  type: SIGN_UP,
  name,
  email,
  password
})
export const signOut = () => ({type: SIGN_OUT})
export const reset = () => ({type: RESET})
export const request = () => ({type: REQUEST})
export const success = (data) => ({type: SUCCESS, data})
export const failure = (error) => ({type: FAILURE, error})

const initialState = {
  data: undefined,
  loading: false,
  error: undefined
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGN_OUT:
      return {...state, data: undefined}
    case RESET:
      return {...state, loading: false, error: undefined}
    case REQUEST:
      return {...state, loading: true}
    case SUCCESS:
      return {loading: false, data: action.data}
    case FAILURE:
      return {
        loading: false,
        error: {
          message: action.error.message,
          status: action.error.status
        }
      }
    default:
      return state
  }
}
