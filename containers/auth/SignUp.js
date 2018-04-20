import {Component} from 'react'
import {connect} from 'react-redux'

import {getUser, getError, isLoading} from '@/redux/modules/auth/selectors'
import {signUp} from '@/redux/modules/auth'
import Form from '@/components/auth/SignUp'

class SignUpFormApp extends Component {
  onSubmit = (params) => {
    const {signUp, loading} = this.props
    if (!loading) signUp(params)
  }

  componentDidUpdate() {
    const {user, onSuccess} = this.props
    if (user && onSuccess) onSuccess()
  }

  render() {
    return <Form {...this.props} onSubmit={this.onSubmit} />
  }
}

const props = (state) => ({
  user: getUser(state),
  loading: isLoading(state),
  error: getError(state)
})

const actions = {signUp}

export default connect(props, actions)(SignUpFormApp)
