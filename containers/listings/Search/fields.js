import {connect} from 'react-redux'

import {getNeighborhoods} from '@/redux/modules/neighborhoods/selectors'
import fields from '@/components/listings/Search/fields'

const props = (...args) => ({
  neighborhoods: getNeighborhoods(...args)
})

const neighborhoods = connect(props)(fields.neighborhoods)

export default {
  ...fields,
  neighborhoods
}
