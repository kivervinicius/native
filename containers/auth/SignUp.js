import {Component} from 'react'
import {connect} from 'react-redux'

import {getUser, getError, isLoading} from '@/redux/modules/auth/selectors'
import {signUp, reset} from '@/redux/modules/auth'
import Form from '@/components/auth/SignUp'

class SignUpFormApp extends Component {
  componentDidMount() {
    this.props.reset()
  }

  componentWillUnmount() {
    this.props.reset()
  }

  componentDidUpdate() {
    const {user, onSuccess} = this.props
    if (user && onSuccess) onSuccess()
  }

  onSubmit = (params) => {
    const {signUp, loading} = this.props
    if (!loading) signUp(params)
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

const actions = {signUp, reset}

export default connect(props, actions)(SignUpFormApp)
