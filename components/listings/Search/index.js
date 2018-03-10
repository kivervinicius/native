import _ from 'lodash'
import update from 'immutability-helper'
import {Component} from 'react'
import {SafeAreaView, View} from 'react-native'

import Modal from '@/components/shared/Modal'
import Button from './Button'
import Menu from './Menu'
import fields from './fields'
import styles from './styles'

const SHOW_MORE = Symbol('SHOW_MORE')

export default class ListingsSearch extends Component {
  state = {
    visible: undefined,
    value: {}
  }

  static defaultProps = {
    value: {}
  }

  static getDerivedStateFromProps(props, state) {
    return {
      value: _.defaults({}, props.value, state.value, {
        area: {min: undefined, max: undefined},
        price: {min: undefined, max: undefined},
        rooms: {min: undefined, max: undefined},
        neighborhoods: []
      })
    }
  }

  onChange = (field) => (value) =>
    this.setState((state) => ({
      value: update(state.value, {
        [field]: {$set: value}
      })
    }))

  onShow = (field) => () => this.setState({visible: field})

  onHide = () => this.setState({visible: undefined})

  onSubmit = () => this.props.onSubmit(this.state.value)

  getValue = (type) => this.state.value[type]

  renderField(type) {
    if (type === SHOW_MORE) {
      return (
        <Menu
          options={_.map(fields, (field, key) => ({
            label: field.title,
            value: key
          }))}
          onSelect={this.onShow}
        />
      )
    } else if (type in fields) {
      const Field = fields[type]
      return (
        <Field value={this.getValue(type)} onChange={this.onChange(type)} />
      )
    }
  }

  render() {
    const {visible} = this.state
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          {['price', 'neighborhoods'].map((key) => (
            <Button key={key} onPress={this.onShow(key)}>
              {fields[key].title}
            </Button>
          ))}
          <Button onPress={this.onShow(SHOW_MORE)}>Mais</Button>
        </View>
        <Modal
          visible={Boolean(visible)}
          presentationStyle="formSheet"
          onDismiss={this.onHide}
        >
          {visible && this.renderField(visible)}
        </Modal>
      </SafeAreaView>
    )
  }
}
