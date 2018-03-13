import {View, Text} from 'react-native'

import styles from './styles'

export default function ListingView({description}) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}
