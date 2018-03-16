import {StyleSheet, Platform} from 'react-native'

const matterportBackground = '#313435'

export const colors = {
  button: Platform.select({
    ios: 'white',
    android: matterportBackground
  })
}

export default StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%'
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Platform.select({
      ios: matterportBackground,
      android: colors.button
    })
  },
  button: {
    flex: 1
  }
})
