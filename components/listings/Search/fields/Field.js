import _ from 'lodash/fp'
import {Component} from 'react'

import {createScreen} from '../Screen'

export const createField = (Target) =>
  class extends Component {
    displayName = `searchField(${Target.displayName || Target.name})`

    get name() {
      const {navigation} = this.props
      return navigation.state.routeName
    }

    get value() {
      const {navigation} = this.props
      const params = navigation.state.params
      return params ? params[this.name] : undefined
    }

    onChange = (value) => {
      const {navigation} = this.props
      navigation.setParams({[this.name]: value})
    }

    onReturn = () => {
      const {navigation} = this.props
      navigation.navigate('menu', navigation.state.params)
    }

    render() {
      const {onSubmit} = this.props
      return (
        <Field onSubmit={onSubmit} onReturn={this.onReturn}>
          <Target value={this.value} onChange={this.onChange} />
        </Field>
      )
    }
  }

export const createFieldScreen = _.flow(createField, createScreen({to: 'menu'}))

export const fieldFactory = (options) => (Target) => {
  const Field = createFieldScreen(Target)
  Field.screen = Field
  return Object.assign(Field, options)
}
