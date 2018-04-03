import {Component} from 'react'

import Field from '@/components/listings/Search/Field'
import {Price, Area, Rooms, Neighborhoods} from './filters'
import Screen from '../Screen'

export default class MenuScreen extends Component {
  onSelect = (name) => () => {
    const {navigation} = this.props
    navigation.navigate(name, navigation.state.params)
  }

  render() {
    return (
      <Screen {...this.props}>
        <Field title="Bairros">
          <Neighborhoods
            title="Ver bairros"
            onPress={this.onSelect('neighborhoods')}
          />
        </Field>
        <Field title="Preço">
          <Price />
        </Field>
        <Field title="Área">
          <Area />
        </Field>
        <Field title="Quartos">
          <Rooms />
        </Field>
      </Screen>
    )
  }
}

export const screen = MenuScreen
