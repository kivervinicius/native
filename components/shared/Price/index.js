import {Fragment} from 'react'
import {View, Text} from 'react-native'

import * as format from '@/assets/format'
import styles from './styles'

export default function Price({children, nullable, size, style, ...props}) {
  const currency = {fontSize: size / 1.6}
  const amount = {fontSize: size}
  return (
    <View style={[styles.container, style]} {...props}>
      {nullable && !children ? (
        <Text style={styles.amount}>{String.fromCharCode(0x2500)}</Text>
      ) : (
        <Fragment>
          <Text style={[styles.currency, currency]}>R$</Text>
          <Text style={[styles.amount, amount]}>{format.number(children)}</Text>
        </Fragment>
      )}
    </View>
  )
}

Price.defaultProps = {
  size: 15
}
