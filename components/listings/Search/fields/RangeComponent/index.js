import _ from 'lodash/fp'
import {Component} from 'react'

const filterResult = _.omitBy(_.isNil)

export default class RangeFieldComponent extends Component {
  static defaultProps = {
    value: {}
  }

  styles = {}

  onChange = (type) => (value) =>
    this.props.onChange(
      filterResult({
        ...this.props.value,
        [type]: this.parseValue(value)
      })
    )

  parseValue = (value) => value

  getValue = (type) => this.props.value[type]
}
