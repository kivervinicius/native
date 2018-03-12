import {StyleSheet} from 'react-native'

import {margin} from '@/assets/styles'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  itemText: {
    fontSize: 16
  },
  itemIcon: {
    fontSize: 25
  }
})
