import {Component} from 'react'

import Field from '@/components/listings/Search/Field'
import {Price, Area, Rooms, Neighborhoods} from './filters'
import Screen from '../Screen'

export default class MenuScreen extends Component {
  onSelect = (name) => () => {
    const {navigation} = this.props
    navigation.navigate(name, navigation.state.params)
  }

  onClear = (name) => () => {
    const {navigation} = this.props
    navigation.setParams({[name]: undefined})
  }

  render() {
    return (
      <Screen {...this.props}>
        <Field title="Bairros" onClear={this.onClear('neighborhoods')}>
          <Neighborhoods
            title="Ver bairros"
            onPress={this.onSelect('neighborhoods')}
          />
        </Field>
        <Field title="Preço" onClear={this.onClear('price')}>
          <Price />
        </Field>
        <Field title="Área" onClear={this.onClear('area')}>
          <Area />
        </Field>
        <Field title="Quartos" onClear={this.onClear('rooms')}>
          <Rooms />
        </Field>
      </Screen>
    )
  }
}

export const screen = MenuScreen
