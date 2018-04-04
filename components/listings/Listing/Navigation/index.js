import {View} from 'react-native'

import Text from '@/components/shared/Text'
import Price from '@/components/shared/Price'
import Button from '@/components/shared/Button'
import styles, {button as buttonStyles} from './styles'

export default function ListingNavigation({price, address, onInterest}) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Price thin size={20}>
          {price}
        </Price>
        <Text style={styles.street}>{address.street}</Text>
      </View>
      <View style={styles.section}>
        <Button styles={buttonStyles} onPress={onInterest}>
          Marcar Visita
        </Button>
      </View>
    </View>
  )
}
