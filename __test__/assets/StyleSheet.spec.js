import _ from 'lodash'
import StyleSheet from '@/assets/StyleSheet'

const STYLES = {
  foo: {
    position: 'relative',
    ':foo': {height: 200},
    ':bar': {width: 200}
  },
  bar: {
    position: 'relative'
  }
}

const FLAT_STYLES = {
  foo: _.omit(STYLES.foo, [':foo', ':bar']),
  foo__foo: STYLES.foo[':foo'],
  foo__bar: STYLES.foo[':bar'],
  bar: STYLES.bar
}

describe('StyleSheet', () => {
  const styles = StyleSheet(STYLES)

  describe('#get', () => {
    it('returns a style with desired variants', () => {
      expect(styles.get('foo')).toHaveLength(1)
      expect(styles.get('foo', {foo: true})).toHaveLength(2)
      expect(styles.get('foo', {foo: true, bar: true})).toHaveLength(3)
    })
  })

  it('contains flat stylesheet properties', () => {
    expect(styles.foo).toMatchObject(FLAT_STYLES.foo)
    expect(styles.bar).toMatchObject(FLAT_STYLES.bar)
    expect(styles.foo__foo).toMatchObject(FLAT_STYLES.foo__foo)
    expect(styles.foo__bar).toMatchObject(FLAT_STYLES.foo__bar)
  })

  it('returns a stylesheet with desired variants')
})
