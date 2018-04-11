import {Component} from 'react'
import {Dimensions} from 'react-native'
import Orientation from 'react-native-orientation'

export default class ResponsiveOrientation extends Component {
  static defaultProps = {
    type: 'window'
  }

  getState = () => {
    const {width, height} = Dimensions.get(this.props.type)
    return {
      width,
      height,
      orientation: height > width ? 'portrait' : 'landscape'
    }
  }

  state = this.getState()

  componentDidMount() {
    Orientation.addOrientationListener(this.onChange)
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this.onChange)
  }

  onChange = () => this.setState(this.getState())

  render() {
    return this.props.children(this.state)
  }
}

export const responsive = (orientationProps) => (Target) => (props) => (
  <ResponsiveOrientation {...orientationProps}>
    {({width, height, orientation}) => (
      <Target
        {...props}
        orientation={orientation}
        dimensions={{width, height}}
      />
    )}
  </ResponsiveOrientation>
)
