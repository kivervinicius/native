import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    margin: 10
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    padding: 20
  },
  address: {
    color: colors.gray.light,
    fontSize: 16,
    marginTop: 5
  },
  neighborhood: {
    fontWeight: '600'
  }
})
