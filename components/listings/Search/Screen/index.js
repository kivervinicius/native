import {Component} from 'react'
import {Button, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

export default class SearchScreen extends Component {
  onSubmit = () => {
    const {navigation, onSubmit} = this.props
    if (onSubmit) onSubmit(navigation.state.params)
  }

  onNavigate = () => {
    const {navigation, to} = this.props
    if (to) navigation.navigate(to, navigation.state.params)
    else navigation.goBack(null)
  }

  get icon() {
    return this.props.to ? 'chevron-left' : 'close'
  }

  render() {
    const {children} = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onNavigate={this.onNavigate}>
          <Icon name={this.icon} size={30} />
        </TouchableOpacity>
        <View style={styles.body}>{children}</View>
        <View style={styles.footer}>
          <Button
            style={styles.button}
            title="Aplicar"
            onPress={this.onSubmit}
          />
        </View>
      </View>
    )
  }
}

export const createScreen = (options) => (Target) => ({
  screenProps,
  ...props
}) => {
  const newProps = {...props, ...screenProps}
  return (
    <SearchScreen {...newProps} {...options}>
      <Target {...newProps} />
    </SearchScreen>
  )
}
