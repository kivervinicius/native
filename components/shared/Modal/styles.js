import {StyleSheet} from 'react-native'

import {padding} from '@/assets/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    ...padding(10, 20)
  },
  closeIcon: {
    fontSize: 30
  },
  title: {
    flex: 1,
    fontSize: 25,
    fontWeight: '600'
  },
  body: {
    flex: 1
  }
})
