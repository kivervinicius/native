import {Component} from 'react'
import {TouchableHighlight} from 'react-native'

import Card from './Body'

export default class ListingCard extends Component {
  state = {
    active: false
  }

  onHighlight = (active) => () => this.setState({active})

  render() {
    const {onPress, ...props} = this.props
    const {active} = this.state
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
