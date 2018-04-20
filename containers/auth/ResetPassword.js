import {PureComponent} from 'react'
import {connect} from 'react-redux'

import {getError, isLoading} from '@/redux/modules/auth/selectors'
import {resetPassword, reset} from '@/redux/modules/auth'
import Form from '@/components/auth/ResetPassword'

class ResetPasswordFormApp extends PureComponent {
  componentDidMount() {
    this.props.reset()
  }

  componentWillUnmount() {
    this.props.reset()
  }

  componentDidUpdate(prev) {
    const {onSuccess, loading, error} = this.props
    const finishedLoading = prev.loading && !loading
    if (finishedLoading && !error && onSuccess) onSuccess()
  }

  onSubmit = (params) => {
    const {resetPassword, loading} = this.props
    if (!loading) resetPassword(params)
  }

  render() {
    return <Form {...this.props} onSubmit={this.onSubmit} />
  }
}

const props = (state) => ({
  loading: isLoading(state),
  error: getError(state)
})

const actions = {resetPassword, reset}

export default connect(props, actions)(ResetPasswordFormApp)
