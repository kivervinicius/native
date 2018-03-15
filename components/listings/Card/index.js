import {Component} from 'react'
import {TouchableHighlight} from 'react-native'

import LAYOUTS from './layouts'

export default class ListingCard extends Component {
  static defaultProps = {
    layout: 'minimal'
  }

  state = {
    active: false
  }

  onHighlight = (active) => () => this.setState({active})

  render() {
    const {onPress, layout, ...props} = this.props
    const {active} = this.state
    const Card = LAYOUTS[layout]
    if (!Card) throw new Error(`Invalid ListingCard layout "${layout}"`)

    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor="rgba(0,0,0,0)"
        onShowUnderlay={this.onHighlight(true)}
        onHideUnderlay={this.onHighlight(false)}
      >
        <Card active={active} {...props} />
      </TouchableHighlight>
    )
  }
}
