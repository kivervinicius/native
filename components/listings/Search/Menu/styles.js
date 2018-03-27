import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  itemActive: {
    backgroundColor: colors.gray.lighter
  },
  itemText: {
    fontSize: 16
  },
  itemIcon: {
    fontSize: 25
  }
})
