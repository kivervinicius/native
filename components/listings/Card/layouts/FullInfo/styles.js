import {StyleSheet} from 'react-native'

import NestedStyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'

export default NestedStyleSheet({
  container: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  thumbnail: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 5
  },
  image: {
    borderRadius: 5
  },
  body: {
    padding: 15
  },
  description: {
    color: colors.gray.mediumDark,
    fontSize: 17,
    lineHeight: 30
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  street: {
    color: colors.gray.darker,
    flex: 1,
    fontSize: 20
  },
  neighborhood: {
    color: colors.gray.medium,
    fontWeight: '600'
  }
})
