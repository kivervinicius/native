import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  body: {
    flex: 1,
    zIndex: 0
  },
  actionButton: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 1
  }
})
