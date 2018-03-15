import {Component} from 'react'
import {Dimensions} from 'react-native'

export default class Orientation extends Component {
  static defaultProps = {
    type: 'window'
  }

  constructor(props) {
    super(props)
    this.state = this.getState(Dimensions.get(this.props.type))
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.onChange)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onChange)
  }

  getState = ({width, height}) => ({
    width,
    height,
    orientation: height > width ? 'portrait' : 'landscape'
  })

  onChange = (e) => this.setState(this.getState(e[this.props.type]))

  render() {
    return this.props.children(this.state)
  }
}

export const responsive = (orientationProps) => (Target) => (props) => (
  <Orientation {...orientationProps}>
    {({width, height, orientation}) => (
      <Target
        {...props}
        portrait={orientation === 'portrait'}
        landscape={orientation === 'landscape'}
        dimensions={{width, height}}
      />
    )}
  </Orientation>
)
