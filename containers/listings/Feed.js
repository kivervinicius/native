import _ from 'lodash'
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {load, reset} from '@/redux/modules/listings/feed'
import {getListings} from '@/redux/modules/listings/feed/selectors'
import Feed from '@/components/listings/Feed'

class FeedApp extends Component {
  static defaultProps = {
    length: 15
  }

  componentDidMount() {
    this.onLoad()
  }

  componentDidUpdate(prev) {
    if (!_.isEqual(prev.params, this.props.params)) {
      this.onReset()
      this.onLoad()
    }
  }

  onReset = () => {
    const {reset, type} = this.props
    reset(type)
  }

  onLoad = (page = 1) => {
    const {load, type, length, params} = this.props
    load(type, {...params, page, pageSize: length})
  }

  renderFeed() {
    return <Feed {...this.props} />
  }

  render() {
    const {loader} = this.props
    const children = this.renderFeed()
    if (!loader) return children
    return React.cloneElement(loader, {onLoad: this.onLoad}, children)
  }
}

const props = (...args) => ({
  data: getListings(...args)
})

const actions = {
  load,
  reset
}

export default connect(props, actions)(FeedApp)
