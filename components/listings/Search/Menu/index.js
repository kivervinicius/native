import _ from 'lodash'
import {Component} from 'react'
import {View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import {createScreen} from '../Screen'
import fields from '../fields'
import styles from './styles'

const OPTIONS = _.map(fields, (field, name) => ({
  value: name,
  label: field.title
}))

export default class Menu extends Component {
  onSelect = (field) => () => {
    const {navigation} = this.props
    navigation.navigate(field, navigation.state.params)
  }

  render() {
    return (
      <View style={styles.container}>
        {OPTIONS.map(({label, value}) => (
          <TouchableOpacity key={value} onPress={this.onSelect(value)}>
            <View style={styles.item}>
              <Text style={styles.itemText}>{label}</Text>
              <Icon name="chevron-right" style={styles.itemIcon} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

export const screen = createScreen()(Menu)
