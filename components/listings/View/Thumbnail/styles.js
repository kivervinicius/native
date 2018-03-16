import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%'
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.gray.light,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  button: {
    flex: 1
  }
})
