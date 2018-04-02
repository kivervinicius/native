import {Component} from 'react'

import Field, {Button} from '@/components/listings/Search/Field'
import {Price, Area, Rooms} from './filters'
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
          <Button onPress={this.onSelect('neighborhoods')}>Ver bairros</Button>
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
