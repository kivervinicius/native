import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: colors.gray.light,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  logo: {
    flex: 0
  }
})
