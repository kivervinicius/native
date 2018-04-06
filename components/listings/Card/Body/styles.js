import {StyleSheet} from 'react-native'

import $StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'

export default $StyleSheet({
  container: {
    padding: 15,
    paddingTop: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.gray.lighter,
    borderRadius: 5,
    ':active': {
      backgroundColor: colors.gray.offWhite
    },
    ':raised': {
      backgroundColor: 'white',
      padding: 0,
      paddingTop: 0,
      borderBottomWidth: 0
    }
  },
  thumbnail: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 5,
    ':primary': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderTopWidth: 4,
      borderColor: colors.blue.medium,
      backgroundColor: colors.blue.medium,
      marginTop: -4
    }
  },
  image: {
    width: '100%',
    borderRadius: 5,
    ':primary': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    }
  },
  body: {
    marginTop: 10,
    ':raised': {
      margin: 15
    }
  },
  paragraph: {
    marginTop: 5
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
    fontSize: 20,
    marginRight: 15
  },
  neighborhood: {
    color: colors.gray.mediumDark,
    fontWeight: '600'
  },
  priceText: {
    fontWeight: '300',
    color: colors.gray.darker
  }
})
