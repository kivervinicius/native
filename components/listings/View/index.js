import {Component} from 'react'
import {View} from 'react-native'

import Modal from '@/components/shared/Modal'
import Gallery from '../Gallery'
import Matterport from '../Matterport'
import Description from './Description'
import Properties from './Properties'
import Thumbnail from './Thumbnail'
import Map from './Map'
import styles from './styles'

export default class ListingView extends Component {
  state = {
    view: undefined
  }

  onOpen = (view) => () => this.setState({view})

  onClose = () => this.setState({view: undefined})

  renderModal() {
    const {images} = this.props
    const {view} = this.state
    const props = {
      visible: Boolean(view),
      onDismiss: this.onClose
    }
    switch (view) {
      case 'gallery':
        props.overlay = true
        props.children = <Gallery>{images}</Gallery>
        break
      case 'matterport':
        props.overlay = true
        props.children = <Matterport code={this.props.matterport_code} />
        break
      case 'interest':
        props.title = 'Marcar Visita'
        props.children = this.props.interestForm
        break
      default:
        return undefined
    }

    return <Modal {...props} />
  }

  render() {
    const {active} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Thumbnail onOpen={this.onOpen} {...this.props} />
          <Properties {...this.props} />
        </View>
        <Description {...this.props} />
        {active && <Map {...this.props.address} />}
        {this.renderModal()}
      </View>
    )
  }
}
