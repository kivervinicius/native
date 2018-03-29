import {Component} from 'react'
import {connect} from 'react-redux'

import {load} from '@/redux/modules/listings/relations'
import {getRelatedListings} from '@/redux/modules/listings/relations/selectors'
import Feed from '@/components/listings/Feed'

export class RelatedLoader extends Component {
  static defaultProps = {
    length: 15
  }

  componentDidMount() {
    const {load, id} = this.props
    load(id)
  }

  render() {
    return <Feed {...this.props} />
  }
}

const props = (...args) => ({
  data: getRelatedListings(...args)
})

const actions = {
  load
}

export default connect(props, actions)(RelatedLoader)
