import _ from 'lodash'
import {Component} from 'react'

import fields from '@/components/listings/Search/fields'
import Screen from './Screen'

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

    onNavigate = () => {
      const {navigation} = this.props
      navigation.navigate('menu', navigation.state.params)
    }
    render() {
      return (
        <Screen onNavigate={this.onNavigate} {...this.props}>
          <Target value={this.value} onChange={this.onChange} />
        </Screen>
      )
    }
  }

export default _.mapValues(fields, (Target) => ({
  screen: createField(Target)
}))
