import {View} from 'react-native'

import Text from '@/components/shared/Text'
import SubmitButton from '../SubmitButton'
import $styles from './styles'

function FormMessage({children, title, styles, onClose, ...props}) {
  return (
    <View style={styles.container}>
      {title && (
        <Text style={$styles.all(styles.text, styles.title)}>{title}</Text>
      )}
      <Text style={styles.text}>{children}</Text>
      <SubmitButton {...props} onPress={onClose} />
    </View>
  )
}

FormMessage.defaultProps = {
  color: 'green',
  label: 'OK'
}

export default $styles.inject()(FormMessage)
