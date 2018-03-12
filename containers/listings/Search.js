import {connect} from 'react-redux'

import {getNeighborhoods} from '@/redux/modules/neighborhoods/selectors'
import Search from '@/components/listings/Search'

const props = (...args) => ({
  neighborhoods: getNeighborhoods(...args)
})

export default connect(props)(Search)
