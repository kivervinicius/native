import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import styles, {iconColor} from './styles'

export default function NavButton({children, icon, ...props}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <Icon style={styles.buttonIcon} name={icon} size={30} color={iconColor} />
      <Text style={styles.buttonText}>{children.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}
