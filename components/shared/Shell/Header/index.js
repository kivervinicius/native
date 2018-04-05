import {Component} from 'react'
import {View, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import styles from './styles'

function renderTitle(title) {
  if (!title) return undefined
  if (typeof title === 'string')
    return <Text style={styles.titleText}>{title}</Text>
  return title
}

export default function Header({title, root, onReturn}) {
  return (
    <View style={styles.container}>
      {!root && (
        <View style={styles.button}>
          <TouchableOpacity onPress={onReturn}>
            <Icon style={styles.buttonIcon} name="chevron-left" />
          </TouchableOpacity>
        </View>
      )}
      {title && <View style={styles.title}>{renderTitle(title)}</View>}
    </View>
  )
}
