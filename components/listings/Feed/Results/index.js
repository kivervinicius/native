import {View} from 'react-native'

import Text from '@/components/shared/Text'
import styles from './styles'

export default function ListingsFeedResults({pagination}) {
  if (!pagination.totalCount) return null
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Encontre o imóvel perfeito para você no Rio de Janeiro
      </Text>
    </View>
  )
}
