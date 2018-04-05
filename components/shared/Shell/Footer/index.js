import {View} from 'react-native'

import Button from '@/components/shared/Button'
import styles from './styles'

export default function Footer({label, onPress, ...props}) {
  return (
    <View style={styles.container}>
      <Button onPress={onPress} {...props}>
        {label}
      </Button>
    </View>
  )
}
