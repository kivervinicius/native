import {Platform, StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 5
  },
  logo: {
    flex: 0
  },
  login: {
    flex: 0
  },
  loginButton: {
    fontSize: 10
  }
})
