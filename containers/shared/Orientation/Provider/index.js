import {Component} from 'react'
import {Dimensions} from 'react-native'
import Orientation from 'react-native-orientation'

import {Provider} from './Context'

export default class OrientationProvider extends Component {
  static defaultProps = {
    to: 'window'
  }

  getState = () => {
    const {width, height} = Dimensions.get(this.props.to)
    return {
      dimensions: {width, height},
      orientation: height > width ? 'portrait' : 'landscape'
    }
  }

  state = this.getState()

  componentDidMount() {
    Dimensions.addEventListener('change', this.onChange)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onChange)
  }

  onChange = () => this.setState(this.getState())

  render() {
    return <Provider {...this.props} value={this.state} />
  }
}
