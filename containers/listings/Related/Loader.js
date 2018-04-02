import {PureComponent} from 'react'
import {connect} from 'react-redux'

import {load} from '@/redux/modules/listings/relations'
import {getRelatedListings} from '@/redux/modules/listings/relations/selectors'
import Loader from '@/containers/shared/Loader'

export class RelatedLoader extends PureComponent {
  onLoad = () => {
    const {load, id} = this.props
    load(id)
  }

  render() {
    return <Loader {...this.props} onLoad={this.onLoad} />
  }
}

const props = (...args) => ({
  data: getRelatedListings(...args)
})

const actions = {
  load
}

export const withRelatedListings = connect(props, actions)

export default withRelatedListings(RelatedLoader)
