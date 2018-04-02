import {Component} from 'react'
import withNavigation from 'react-navigation/src/views/withNavigation'

import * as Fields from '@/containers/listings/Search'

const createField = ({name}) => (Target) =>
  withNavigation(
    class extends Component {
      displayName = `searchField(${Target.displayName || Target.name})`

      get value() {
        const {navigation} = this.props
        const params = navigation.state.params
        return params ? params[name] : undefined
      }

      onChange = (value) => {
        const {navigation} = this.props
        navigation.setParams({[name]: value})
      }

      onNavigate = () => {
        const {navigation} = this.props
        navigation.navigate('menu', navigation.state.params)
      }

      render() {
        return <Target value={this.value} onChange={this.onChange} />
      }
    }
  )

export const Price = createField({name: 'price'})(Fields.Price)
export const Area = createField({name: 'area'})(Fields.Area)
export const Rooms = createField({name: 'rooms'})(Fields.Rooms)
export const Neighborhoods = createField({name: 'neighborhoods'})(
  Fields.Neighborhoods
)
