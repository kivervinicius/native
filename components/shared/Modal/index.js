import {Modal, View, SafeAreaView, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import {responsive} from '@/containers/shared/Orientation/Responsive'
import $styles from './styles'

function ControlledModal({
  children,
  title,
  closeIcon,
  onDismiss,
  styles,
  ...props
}) {
  return (
    <Modal {...props} onRequestClose={onDismiss} onDismiss={onDismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onDismiss}>
            <Icon name={closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>{children}</View>
      </SafeAreaView>
    </Modal>
  )
}

ControlledModal.defaultProps = {
  closeIcon: 'close',
  animationType: 'slide'
}

export default responsive()($styles.inject()(ControlledModal))
