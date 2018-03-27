import StyleSheet from '@/assets/StyleSheet'
import {padding} from '@/assets/styles'

export default StyleSheet({
  container: {
    flex: 1,
    display: 'flex'
  },
  body: {
    padding: 20
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
  },
  separator: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 15
  }
})
