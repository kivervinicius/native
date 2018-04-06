import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray.lighter
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 10,
    paddingRight: 10,
    color: colors.gray.lighter
  }
})
