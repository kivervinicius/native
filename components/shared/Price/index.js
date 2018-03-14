import {View, Text} from 'react-native'

import * as format from '@/assets/format'
import styles from './styles'

export default function Price({children, size, style, ...props}) {
  const currency = {fontSize: size / 1.6}
  const amount = {fontSize: size}
  return (
    <View style={[styles.container, style]} {...props}>
      <Text style={[styles.currency, currency]}>R$</Text>
      <Text style={[styles.amount, amount]}>{format.number(children)}</Text>
    </View>
  )
}

Price.defaultProps = {
  size: 15
}
