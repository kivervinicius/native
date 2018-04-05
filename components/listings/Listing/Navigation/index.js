import {View} from 'react-native'

import Button from '@/components/shared/Button'
import styles, {button as buttonStyles} from './styles'

export default function ListingNavigation({onInterest}) {
  return (
    <View style={styles.container}>
      <Button styles={buttonStyles} onPress={onInterest}>
        Marcar Visita
      </Button>
    </View>
  )
}
