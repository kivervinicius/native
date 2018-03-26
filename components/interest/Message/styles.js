import * as colors from '@/assets/colors'
import StyleSheet from '@/assets/StyleSheet'

export const buttonColor = colors.green.medium

export default StyleSheet({
  container: {
    flex: 1,
    padding: 25,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18
  },
  title: {
    fontSize: 24,
    fontWeight: '600'
  }
})
