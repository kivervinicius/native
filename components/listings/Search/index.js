import {Component} from 'react'
import {SafeAreaView, View} from 'react-native'

import Range from './Range'
import styles from './styles'

export default class ListingsSearch extends Component {
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Range
            options={[
              {label: 'foo', value: 'foo'},
              {label: 'bar', value: 'bar'}
            ]}
          />
        </View>
      </SafeAreaView>
    )
  }
}
