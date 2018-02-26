export const SIGN_IN = 'auth/SIGN_IN'
export const SIGN_UP = 'auth/SIGN_UP'
export const REQUEST = 'auth/REQUEST'
export const SUCCESS = 'auth/SUCCESS'
export const FAILURE = 'auth/FAILURE'

export const signIn = ({username, password}) => ({
  type: SIGN_IN,
  username,
  password
})
export const request = () => ({
  type: REQUEST
})
export const success = (data) => ({
  type: SUCCESS,
  data
})
export const failure = (error) => ({
  type: FAILURE,
  error
})

const initialState = {
  data: undefined,
  loading: false,
  error: undefined
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {...state, loading: true}
    case SUCCESS:
      return {...state, loading: false, data: action.data}
    default:
      return state
  }
}
