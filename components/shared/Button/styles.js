import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'

export default StyleSheet({
  container: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    ':color=blue': {
      backgroundColor: colors.blue.medium,
      borderColor: colors.blue.light
    },
    ':color=green': {
      backgroundColor: colors.green.medium,
      borderColor: colors.green.border
    }
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    marginBottom: 2
  }
})
