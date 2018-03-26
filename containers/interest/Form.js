import {connect} from 'react-redux'

import {getInterestTypes} from '@/redux/modules/interest/types/selectors'
import {request} from '@/redux/modules/interest/form'
import Form from '@/components/interest/Form'

const props = (state) => ({
  types: getInterestTypes(state)
})

const actions = {
  onSubmit: request
}

export default connect(props, actions)(Form)
