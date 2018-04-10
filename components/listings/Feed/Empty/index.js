import {View} from 'react-native'

import Text from '@/components/shared/Text'
import styles from './styles'

export default function ListingsFeedEmpty({loading}) {
  if (loading) return null
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.header]}>Sem resultados</Text>
      <Text style={styles.text}>
        Altere ou limpe os filtros para ver resultados.
      </Text>
    </View>
  )
}
