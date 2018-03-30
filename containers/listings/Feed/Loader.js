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
  state = {page: 1}

  static defaultProps = {
    length: 15
  }

  static getDerivedStateFromProps(props) {
    if (props.page) return {page: props.page}
    return null
  }

  onChangePage = (page) => this.setState({page})

  onLoad = (params) => {
    const {load, type} = this.props
    load(type, params)
  }

  get params() {
    const {length, params} = this.props
    const {page} = this.state
    return {...params, page, pageSize: length}
  }

  render() {
    return (
      <Loader
        {...this.props}
        params={this.params}
        onLoad={this.onLoad}
        onChangePage={this.onChangePage}
      />
    )
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
