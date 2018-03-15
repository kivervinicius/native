import {Fragment} from 'react'
import {View, Text} from 'react-native'

import * as format from '@/assets/format'
import $styles from './styles'

function Price({styles, children, nullable, size, ...props}) {
  const currencyStyle = $styles.all(
    {fontSize: size / 1.6},
    styles.currency,
    styles.text
  )
  const amountStyle = $styles.all({fontSize: size}, styles.amount, styles.text)
  return (
    <View style={styles.container} {...props}>
      {nullable && !children ? (
        <Text style={styles.amount}>{String.fromCharCode(0x2500)}</Text>
      ) : (
        <Fragment>
          <Text style={currencyStyle}>R$</Text>
          <Text style={amountStyle}>{format.number(children)}</Text>
        </Fragment>
      )}
    </View>
  )
}

Price.defaultProps = {
  size: 15
}

export default $styles.inject(Price)
