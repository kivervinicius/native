import StyleSheet from '@/assets/StyleSheet'
import {padding} from '@/assets/styles'

export default StyleSheet({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    ...padding(10, 40)
  },
  field: {
    paddingTop: 20
  },
  input: {
    fontSize: 18,
    width: '100%'
  }
})
