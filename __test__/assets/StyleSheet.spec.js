import _ from 'lodash'
import {View} from 'react-native'
import renderer from 'react-test-renderer'

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
  const $styles = StyleSheet(STYLES)

  it('contains flat stylesheet properties', () => {
    expect($styles.foo).toMatchObject(FLAT_STYLES.foo)
    expect($styles.bar).toMatchObject(FLAT_STYLES.bar)
    expect($styles.foo__foo).toMatchObject(FLAT_STYLES.foo__foo)
    expect($styles.foo__bar).toMatchObject(FLAT_STYLES.foo__bar)
  })

  it('returns a stylesheet with desired variants', () => {
    expect($styles({foo: true, bar: true})).toMatchObject({
      foo: [FLAT_STYLES.foo, FLAT_STYLES.foo__foo, FLAT_STYLES.foo__bar],
      bar: [FLAT_STYLES.bar]
    })
  })

  it('ignores falsy values', () => {
    expect($styles({foo: true, bar: false})).toMatchObject({
      foo: [FLAT_STYLES.foo, FLAT_STYLES.foo__foo],
      bar: [FLAT_STYLES.bar]
    })
  })

  describe('#get', () => {
    it('returns a style with desired variants', () => {
      expect($styles.get('foo')).toHaveLength(1)
      expect($styles.get('foo', {foo: true})).toHaveLength(2)
      expect($styles.get('foo', {foo: true, bar: true})).toHaveLength(3)
    })
  })

  describe('#inject', () => {
    const Component = $styles.inject(({styles}) => <View style={styles.foo} />)

    it('extracts variants from props', () => {
      const node = renderer.create(<Component foo />).toJSON()
      expect(node.props.style).toMatchObject([
        FLAT_STYLES.foo,
        FLAT_STYLES.foo__foo
      ])
    })

    it('merges "styles" props into final stylesheet', () => {
      const moreStyles = {foo: {flex: 1}}
      const node = renderer
        .create(<Component bar styles={moreStyles} />)
        .toJSON()
      expect(node.props.style).toMatchObject([
        FLAT_STYLES.foo,
        FLAT_STYLES.foo__bar,
        moreStyles.foo
      ])
    })
  })
})
