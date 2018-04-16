import {Component} from 'react'
import {TouchableWithoutFeedback} from 'react-native'

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
      <TouchableWithoutFeedback
        onPress={onPress}
        onPressIn={this.onHighlight(true)}
        onPressOut={this.onHighlight(false)}
      >
        <Card active={active} {...props} />
      </TouchableWithoutFeedback>
    )
  }
}

export {Row, Price, Street, Neighborhood} from './Body/components'
