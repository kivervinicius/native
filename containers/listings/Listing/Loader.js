import {Component} from 'react'
import {connect} from 'react-redux'

import {load} from '@/redux/modules/listings/data'
import {getData, isLoading} from '@/redux/modules/listings/data/selectors'
import Loader from '@/containers/shared/Loader'

export class ListingLoader extends Component {
  onLoad = () => {
    const {load, id} = this.props
    load(id)
  }

  render() {
    return <Loader {...this.props} onLoad={this.onLoad} />
  }
}

const props = (...args) => ({
  data: getData(...args),
  loading: isLoading(...args)
})

const actions = {
  load
}

export default connect(props, actions)(ListingLoader)
