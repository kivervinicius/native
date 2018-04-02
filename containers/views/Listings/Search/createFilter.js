import {Component} from 'react'
import withNavigation from 'react-navigation/src/views/withNavigation'

export default ({name}) => (Target) =>
  withNavigation(
    class extends Component {
      displayName = `searchFilter(${Target.displayName || Target.name})`

      get value() {
        const {navigation} = this.props
        const params = navigation.state.params
        return params ? params[name] : undefined
      }

      onChange = (value) => {
        const {navigation} = this.props
        navigation.setParams({[name]: value})
      }

      onNavigate = () => {
        const {navigation} = this.props
        navigation.navigate('menu', navigation.state.params)
      }

      render() {
        return <Target value={this.value} onChange={this.onChange} />
      }
    }
  )
