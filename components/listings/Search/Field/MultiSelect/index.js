import {Component} from 'react'
import {FlatList} from 'react-native'

import Option from './Option'

const extractKey = ({value}) => value

export default class MultiSelectField extends Component {
  render() {
    const {options} = this.props

    return (
      <FlatList
        data={options}
        renderItem={({item}) => <Option key={item.value} {...item} />}
        keyExtractor={extractKey}
      />
    )
  }
}
