import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
  header: {
    borderColor: colors.gray.lighter,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10
  },
  map: {
    width: '100%',
    height: 300
  }
})

export const modalStyles = StyleSheet.create({
  header: {
    paddingTop: 60
  }
})
