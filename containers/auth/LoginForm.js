import {connect} from 'react-redux'

import {signIn} from '@/redux/modules/auth'
import {isLoading, getError} from '@/redux/modules/auth/selectors'
import LoginForm from '@/components/auth/LoginForm'

const props = (state) => ({
  loading: isLoading(state),
  error: getError(state)
})

const actions = {
  onSubmit: signIn
}

export default connect(props, actions)(LoginForm)
