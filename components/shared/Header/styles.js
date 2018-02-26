import {Platform, StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
})
