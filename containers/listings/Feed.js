import {Component} from 'react'
import {connect} from 'react-redux'

import {request} from '@/redux/modules/listings/feed'
import {getListings} from '@/redux/modules/listings/feed/selectors'
import Feed from '@/components/listings/Feed'

class FeedApp extends Component {
  componentDidMount() {
    const {type, request} = this.props
    request(type)
  }

  render() {
    return <Feed {...this.props} />
  }
}

const props = (...args) => ({
  data: getListings(...args)
})

const actions = {
  request
}

export default connect(props, actions)(FeedApp)
