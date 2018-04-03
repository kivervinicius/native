import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  options: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  buttonText: {
    color: colors.blue.medium
  },
  buttonIcon: {
    fontSize: 20,
    color: colors.blue.medium
  }
})

export const button = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.gray.$f0f0,
    margin: 5,
    paddingLeft: 10,
    paddingRight: 5
  },
  text: {
    color: colors.gray.mediumDark
  },
  icon: {
    width: 20,
    height: 20,
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray.mediumDark,
    color: colors.gray.mediumDark,
    marginLeft: 10
  }
})
