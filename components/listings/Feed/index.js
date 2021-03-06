import {Component} from 'react'
import withNavigation from 'react-navigation/src/views/withNavigation'

import Empty from './Empty'
import layouts from './layouts'

@withNavigation
export default class ListingsFeed extends Component {
  static defaultProps = {
    layout: 'vertical',
    ListEmptyComponent: Empty
  }

  onSelect = (id) => () => {
    const {navigation} = this.props
    navigation.navigate('listing', {id})
  }

  render() {
    const {layout, ...props} = this.props
    const Layout = layouts[layout]
    if (!Layout) throw new Error(`Invalid ListingsFeed layout ${layout}`)

    return <Layout {...props} onSelect={this.onSelect} />
  }
}

export {default as Results} from './Results'
export {default as Empty} from './Empty'
