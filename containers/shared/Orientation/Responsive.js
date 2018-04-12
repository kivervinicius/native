import _ from 'lodash'
import React, {PureComponent} from 'react'
import Orientation from 'react-native-orientation'

import {Provider, withOrientation} from './Provider/Context'
import Locker from './Locked'

@withOrientation
export default class ResponsiveOrientation extends PureComponent {
  state = {
    previousState: null
  }

  componentDidMount() {
    const {locked, orientation} = this.props
    if (locked) {
      this.setState({previousState: orientation})
      Orientation.unlockAllOrientations()
    }
  }

  componentWillUnmount() {
    const {locked} = this.props
    const {previousState} = this.state
    if (previousState && locked) {
      Locker.lockTo(previousState)
    }
  }

  get orientationParams() {
    return _.pick(this.props, ['dimensions', 'orientation'])
  }

  renderChildren() {
    const {children} = this.props
    if (React.isValidElement(children))
      return React.cloneElement(
        React.Children.only(children),
        this.orientationParams
      )
    return children(this.orientationParams)
  }

  render() {
    return <Provider value={{locked: false}}>{this.renderChildren()}</Provider>
  }
}

export const responsive = (Target) => (props) => (
  <ResponsiveOrientation>
    {(data) => <Target {...props} {...data} />}
  </ResponsiveOrientation>
)
