import {Modal, View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

export default function ControlledModal({
  children,
  title,
  closeIcon,
  onDismiss,
  ...props
}) {
  return (
    <Modal {...props} onRequestClose={onDismiss} onDismiss={onDismiss}>
      <SafeAreaView style={styles.container()}>
        <View style={styles.header(props)}>
          <TouchableOpacity style={styles.closeButton} onPress={onDismiss}>
            <Icon name={closeIcon} style={styles.closeIcon()} />
          </TouchableOpacity>
          {title && <Text style={styles.title()}>{title}</Text>}
        </View>
        <View style={styles.body()}>{children}</View>
      </SafeAreaView>
    </Modal>
  )
}

ControlledModal.defaultProps = {
  closeIcon: 'close',
  animationType: 'slide'
}
