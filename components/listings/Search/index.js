import _ from 'lodash'
import {View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import fields from '../fields'
import styles from './styles'

export default function ListingsSearch({onSelect, active}) {
  return (
    <View style={styles.container}>
      {OPTIONS.map(({label, value}) => (
        <TouchableOpacity key={value} onPress={onSelect(value)}>
          <View
            style={[
              styles.item,
              active.indexOf(value) !== -1 && styles.itemActive
            ]}
          >
            <Text style={styles.itemText}>{label}</Text>
            <Icon name="chevron-right" style={styles.itemIcon} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

SearchMenu.defaultProps = {
  active: []
}
