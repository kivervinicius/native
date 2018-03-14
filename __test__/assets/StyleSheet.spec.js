import _ from 'lodash'
import StyleSheet, {flatten} from '@/assets/StyleSheet'

const STYLES = {
  foo: {
    position: 'relative',
    height: 100,
    width: 100,
    ':foo': {height: 200},
    ':bar': {width: 200}
  }
}

describe.only('StyleSheet', () => {
  describe('flatten', () => {
    const styles = flatten(STYLES)
    it('assigns style properties to base namespace', () => {
      expect(styles.foo).toMatchObject(_.omit(STYLES.foo, [':foo', ':bar']))
    })
    it('flattens nested style definitions', () => {
      expect(styles).toHaveProperty('foo')
      expect(styles).toHaveProperty('foo__foo')
      expect(styles).toHaveProperty('foo__bar')
    })
  })

  it('returns an array with valid variants', () => {
    const styles = StyleSheet(STYLES)
    expect(styles.foo()).toHaveLength(1)
    expect(styles.foo({test: true})).toHaveLength(1)
    expect(styles.foo({foo: false})).toHaveLength(1)
    expect(styles.foo({foo: true})).toHaveLength(2)
    expect(styles.foo({foo: true, bar: true})).toHaveLength(3)
  })
})
