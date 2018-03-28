import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'
import {padding} from '@/assets/styles'

export default StyleSheet({
  container: {
    position: 'relative'
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: colors.blue.medium,
    width: 60,
    ...padding(5, null),
    ':icon': {
      width: 'auto',
      padding: 10
    }
  },
  text: {
    color: 'white',
    fontWeight: '600'
  }
})
