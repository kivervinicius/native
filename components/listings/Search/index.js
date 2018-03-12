import _ from 'lodash'
import update from 'immutability-helper'
import {Component} from 'react'
import {SafeAreaView, View} from 'react-native'

import Modal from '@/components/shared/Modal'
import Button from './Button'
import Field from './Field'
import Menu from './Menu'
import fields from './fields'
import styles from './styles'

const SHOW_MORE = 'SHOW_MORE'

export default class ListingsSearch extends Component {
  state = {
    location: [],
    value: {}
  }

  static defaultProps = {
    value: {}
  }

  static getDerivedStateFromProps(props, state) {
    return {
      value: _.defaults({}, props.value, state.value, {
        area: {},
        price: {},
        rooms: {},
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

  onPushLocation = (field) => () =>
    this.setState(({location}) => ({location: [...location, field]}))

  onPopLocation = () =>
    this.setState(
      ({location}) => ({
        location: location.slice(0, location.length - 1)
      }),
      () => {
        if (this.state.location.length === 0) this.onSubmit()
      }
    )

  onClose = () => this.setState({location: []}, this.onSubmit)

  onSubmit = () => this.props.onSubmit(_.omitBy(this.state.value, _.isEmpty))

  getValue = (type) => this.state.value[type]

  renderField(type) {
    if (type === SHOW_MORE) {
      return (
        <Menu
          options={_.map(fields, (field, key) => ({
            label: field.title,
            value: key
          }))}
          onSelect={this.onPushLocation}
        />
      )
    } else if (type in fields) {
      const TargetField = fields[type]
      return (
        <Field onSubmit={this.onClose}>
          <TargetField
            value={this.getValue(type)}
            onChange={this.onChange(type)}
            neighborhoods={this.props.neighborhoods}
          />
        </Field>
      )
    }
  }

  renderModal() {
    const {location} = this.state
    const currentLocation = _.last(location)
    const props = {
      visible: location.length > 0,
      closeIcon: location.length > 1 ? 'chevron-left' : 'close',
      title: undefined
    }
    if (currentLocation in fields) props.title = fields[currentLocation].title

    return (
      <Modal
        presentationStyle="formSheet"
        onDismiss={this.onPopLocation}
        {...props}
      >
        {currentLocation && this.renderField(currentLocation)}
      </Modal>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          {['price', 'neighborhoods'].map((key) => (
            <Button key={key} onPress={this.onPushLocation(key)}>
              {fields[key].title}
            </Button>
          ))}
          <Button onPress={this.onPushLocation(SHOW_MORE)}>Mais</Button>
        </View>
        {this.renderModal()}
      </SafeAreaView>
    )
  }
}
