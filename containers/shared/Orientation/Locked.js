import {Component} from 'react'
import Orientation from 'react-native-orientation'

import {Provider} from './Provider/Context'

export default class LockedOrientation extends Component {
  state = {
    locked: false
  }

  static lockTo(orientation) {
    if (orientation === 'landscape') Orientation.lockToLandscape()
    else if (orientation === 'portrait') Orientation.lockToPortrait()
  }

  static getDerivedStateFromProps(props) {
    if (props.disabled || !props.to) return {locked: false}
    return null
  }

  componentDidUpdate(_, prevState) {
    if (prevState.locked === this.state.locked) return
    if (this.state.locked) this.onLock(true)
    else this.onUnlock(true)
  }

  componentDidMount() {
    this.onLock(true)
  }

  componentWillUnmount() {
    this.onUnlock()
  }

  onLock = (force = false) => {
    const {to} = this.props
    if (!to || (!force && this.state.locked)) return
    LockedOrientation.lockTo(to)
    this.setState({locked: true})
  }

  onUnlock = (force = false) => {
    if (!force && !this.state.locked) return
    Orientation.unlockAllOrientations()
    this.setState({locked: false})
  }

  render() {
    const {children} = this.props
    return <Provider value={this.state}>{children}</Provider>
  }
}
