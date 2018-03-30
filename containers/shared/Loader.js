import _ from 'lodash'
import React, {Component} from 'react'

export default class Loader extends Component {
  componentDidMount() {
    const {onLoad, params} = this.props
    onLoad(params)
  }

  get status() {
    return _.pick(this.props, 'pagination', 'loading', 'error', 'data')
  }

  renderChildren() {
    const {children} = this.props
    if (typeof children === 'function') return children(this.status)
    return React.cloneElement(React.Children.only(children), this.status)
  }

  render() {
    const {as: TargetComponent, ...props} = this.props
    const children = this.renderChildren()
    if (!TargetComponent) return children
    return <TargetComponent {...props}>{children}</TargetComponent>
  }
}
