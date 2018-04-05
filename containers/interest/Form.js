import {Component} from 'react'
import {connect} from 'react-redux'

import {getInterestTypes} from '@/redux/modules/interest/types/selectors'
import {isLoading, getError} from '@/redux/modules/interest/form/selectors'
import {request} from '@/redux/modules/interest/form'
import Form from '@/components/interest/Form'

class InterestFormApp extends Component {
  onSubmit = (params) => {
    const {request, id, loading} = this.props
    if (!loading) request(id, params)
  }

  onOpenCalendly = () => {
    const {request, id, onOpenCalendly} = this.props
    request(id, {
      name: 'Calendly',
      message:
        'Esta mensagem está sendo enviada porque algum usuário tentou agendar uma visita pelo Calendly neste imóvel.'
    })
    if (onOpenCalendly) onOpenCalendly()
  }

  render() {
    return (
      <Form
        {...this.props}
        onSubmit={this.onSubmit}
        onOpenCalendly={this.onOpenCalendly}
      />
    )
  }
}

const props = (state) => ({
  types: getInterestTypes(state),
  loading: isLoading(state),
  error: getError(state)
})

const actions = {request}

export default connect(props, actions)(InterestFormApp)
