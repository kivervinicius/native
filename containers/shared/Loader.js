import _ from 'lodash'
import React, {Component} from 'react'

const renderChildren = (children, props) => {
  if (_.isFunction(children)) return children(props)
  return React.cloneElement(React.Children.only(children), props)
}

export default class Loader extends Component {
  componentDidMount() {
    const {onLoad, params} = this.props
    onLoad(params)
  }

  componentDidUpdate(prev) {
    const {onLoad, params} = this.props
    if (!_.isEqual(prev.params, params)) onLoad(params)
  }

  get status() {
    return _.pick(this.props, 'pagination', 'loading', 'error', 'data')
  }

  render() {
    const {as: TargetComponent, children, ...props} = this.props
    if (!TargetComponent) return renderChildren(children, props)
    return (
      <TargetComponent {...props}>
        {renderChildren(children, props)}
      </TargetComponent>
    )
  }
}
