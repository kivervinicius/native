import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    position: 'relative'
  },
  images: {},
  pagination: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    width: '100%'
  },
  icon: {
    color: 'white',
    fontSize: 10,
    margin: 5
  },
  iconActive: {
    fontSize: 15
  }
})
