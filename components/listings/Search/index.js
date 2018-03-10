import _ from 'lodash'
import update from 'immutability-helper'
import {Component} from 'react'
import {SafeAreaView, View} from 'react-native'

import styles from './styles'

export default class ListingsSearch extends Component {
  state = {
    visible: [],
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

  onSubmit = () => this.props.onSubmit(this.state.value)

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>...</View>
      </SafeAreaView>
    )
  }
}
