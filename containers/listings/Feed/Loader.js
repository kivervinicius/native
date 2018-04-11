import {PureComponent} from 'react'
import {connect} from 'react-redux'

import {load} from '@/redux/modules/listings/feed'
import {
  getListings,
  getPagination,
  isLoading
} from '@/redux/modules/listings/feed/selectors'
import Loader from '@/containers/shared/Loader'

export class FeedLoader extends PureComponent {
  static defaultProps = {
    length: 15
  }

  onLoad = () => {
    const {load, loading, type} = this.props
    if (!loading) load(type, this.params)
  }

  get params() {
    const {length, params} = this.props
    return {...params, pageSize: length}
  }

  render() {
    return <Loader {...this.props} params={this.params} onLoad={this.onLoad} />
  }
}

const props = (...args) => ({
  data: getListings(...args),
  pagination: getPagination(...args),
  loading: isLoading(...args)
})

const actions = {
  load
}

export const withFeed = connect(props, actions)

export default withFeed(FeedLoader)
