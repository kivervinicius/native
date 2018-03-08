import {View, Text} from 'react-native'

import styles from './styles'

export default function Price({children, size, ...props}) {
  const currency = {fontSize: size / 1.5}
  const amount = {fontSize: size}
  return (
    <View style={styles.container} {...props}>
      <Text style={[styles.currency, currency]}>R$</Text>
      <Text style={[styles.amount, amount]}>
        {Number(children).toLocaleString()}
      </Text>
    </View>
  )
}

Price.defaultProps = {
  size: 15
}
