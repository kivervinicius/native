import {Component} from 'react'
import {connect} from 'react-redux'

import {load} from '@/redux/modules/listings/data'
import {getData, isLoading} from '@/redux/modules/listings/data/selectors'
import View from '@/components/listings/View'

class ListingApp extends Component {
  componentDidMount() {
    const {data, loading} = this.props
    if (!data && !loading) {
      this.onLoad()
    }
  }

  onLoad = () => {
    const {load, id} = this.props
    load(id)
  }

  render() {
    const {data} = this.props
    return <View {...data} />
  }
}

const props = (...args) => ({
  data: getData(...args),
  loading: isLoading(...args)
})

const actions = {
  load
}

export default connect(props, actions)(ListingApp)
