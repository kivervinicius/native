import {Component} from 'react'
import Orientation from 'react-native-orientation'

import Provider from './Provider'

export default class LockedOrientationProvider extends Component {
  state = {
    locked: false
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
    switch (to) {
      case 'landscape':
        Orientation.lockToLandscape()
        break
      case 'portrait':
        Orientation.lockToPortrait()
        break
    }
    this.setState({locked: true})
  }

  onUnlock = (force = false) => {
    if (!force && !this.state.locked) return
    Orientation.unlockAllOrientations()
    this.setState({locked: false})
  }

  render() {
    return <Provider {...this.props} value={this.state} />
  }
}
