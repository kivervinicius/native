import * as colors from '@/assets/colors'
import {padding} from '@/assets/styles'
import StyleSheet from '@/assets/StyleSheet'

export const buttonColor = colors.green.medium

export default StyleSheet({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...padding(25, 25, 0)
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
