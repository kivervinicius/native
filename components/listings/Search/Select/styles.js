import {StyleSheet} from 'react-native'

import {padding} from '@/assets/styles'

export default StyleSheet.create({
  selectToggle: {
    flex: null,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    ...padding(5, 10),
    marginBottom: 10,
    borderWidth: 1
  },
  selectToggleText: {
    flex: 1,
    marginLeft: 5,
    width: '100%'
  },
  button: {
    borderRadius: 0
  }
})
