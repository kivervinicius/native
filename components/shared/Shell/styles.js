import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 1,
    padding: 10
  },
  header: {
    margin: 0
  },
  nav: {
    flex: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopColor: colors.gray.light,
    borderTopWidth: StyleSheet.hairlineWidth
  }
})
