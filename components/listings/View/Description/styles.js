import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'
import {padding} from '@/assets/styles'

export default StyleSheet.create({
  container: {
    display: 'flex',
    ...padding(10, 30)
  },
  title: {
    color: colors.gray.dark,
    fontWeight: '700',
    marginBottom: 10
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  section: {
    ...padding(10, null)
  },
  subSection: {
    flex: 0.4
  }
})
