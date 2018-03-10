import {StyleSheet} from 'react-native'

import {padding} from '@/assets/styles'

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'white'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  buttonContainer: {
    borderRadius: 15,
    height: 35,
    backgroundColor: 'grey',
    ...padding(0, 15)
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 35,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false
  }
})
