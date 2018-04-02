import {Component} from 'react'
import {View} from 'react-native'

import Button from './Button'
import styles from './styles'

export default class SelectInput extends Component {
  onSelect = (value) => console.log(value)

  render() {
    const {options} = this.props
    return (
      <View style={styles.container}>
        {options.map(({value, label}) => (
          <Button
            key={value}
            label={label}
            onPress={() => this.onSelect(value)}
          />
        ))}
      </View>
    )
  }
}
