import {StyleSheet} from 'react-native'

import {padding} from '@/assets/styles'

export default StyleSheet.create({
  container: {
    borderRadius: 15,
    height: 35,
    backgroundColor: 'grey',
    ...padding(0, 15)
  },
  text: {
    fontSize: 14,
    lineHeight: 35,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false
  }
})
