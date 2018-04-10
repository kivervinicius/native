import _ from 'lodash/fp'
import {PureComponent} from 'react'
import {FlatList} from 'react-native'

import Card from '@/components/listings/Card'

const keyExtractor = _.flow(_.get('id'), _.toString)

export default class VerticalFeed extends PureComponent {
  renderComponent = (Target) => (props) => <Target {...this.props} {...props} />

  renderProps = _.flow(
    _.pick([
      'ListHeaderComponent',
      'ListFooterComponent',
      'ListEmptyComponent'
    ]),
    _.mapValues(this.renderComponent)
  )

  render() {
    const {onSelect, ...props} = this.props
    return (
      <FlatList
        {...props}
        {...this.renderProps(props)}
        keyExtractor={keyExtractor}
        renderItem={({item}) => <Card onPress={onSelect(item.id)} {...item} />}
      />
    )
  }
}
