import _ from 'lodash'
import {View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import fields from '../fields'
import styles from './styles'

const OPTIONS = _.map(fields, (field, name) => ({
  value: name,
  label: field.title
}))

export default function SearchMenu({onSelect}) {
  return (
    <View style={styles.container}>
      {OPTIONS.map(({label, value}) => (
        <TouchableOpacity key={value} onPress={onSelect(value)}>
          <View style={styles.item}>
            <Text style={styles.itemText}>{label}</Text>
            <Icon name="chevron-right" style={styles.itemIcon} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}
