import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    padding: 10
  },
  nav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    borderTopColor: colors.gray.light,
    borderTopWidth: StyleSheet.hairlineWidth
  }
})
