import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'
import {elevation} from '@/assets/styles'

export default StyleSheet({
  container: {
    padding: 8,
    borderWidth: 1.2,
    borderRadius: 5,
    ':raised': elevation(2),
    ':color=blue': {
      backgroundColor: colors.blue.medium,
      borderColor: colors.blue.border
    },
    ':color=green': {
      backgroundColor: colors.green.medium,
      borderColor: colors.green.border
    },
    ':color=lightblue': {
      backgroundColor: 'white',
      borderColor: colors.blue.medium
    },
    ':disabled': {
      opacity: 0.6
    }
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    marginBottom: 2,
    ':color=lightblue': {
      color: colors.blue.medium
    }
  }
})
