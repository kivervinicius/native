import {View} from 'react-native'

import Text from '@/components/shared/Text'
import styles from './styles'

export default function ListingsFeedResults({pagination}) {
  if (!pagination.totalCount) return null
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.highlight]}>
        {pagination.totalCount} imóveis
      </Text>
      <Text style={styles.text}>em Rio de Janeiro</Text>
    </View>
  )
}
