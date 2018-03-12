import {Component} from 'react'
import {connect} from 'react-redux'

import {getNeighborhoods} from '@/redux/modules/neighborhoods/selectors'
import Search from '@/components/listings/Search'

class SearchApp extends Component {
  onSubmit = (value) => {
    const {navigation} = this.props
    setTimeout(() => navigation.setParams(value))
  }

  render() {
    return <Search {...this.props} onSubmit={this.onSubmit} />
  }
}

const props = (...args) => ({
  neighborhoods: getNeighborhoods(...args)
})

export default connect(props)(SearchApp)
