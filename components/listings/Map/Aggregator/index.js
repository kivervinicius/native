import _ from 'lodash/fp'
import React, {Component} from 'react'
import {View} from 'react-native'

import Marker from './Marker'

const {sin, cos, pow, sqrt, atan2} = Math
// Radius of the earth in Km
const R = 6372.8
const angle2rad = (x) => Math.PI * x / 180
const coord2rad = ({lat, lng}) => ({lat: angle2rad(lat), lng: angle2rad(lng)})
const hav = (x) => pow(sin(x / 2), 2)
// Haversine distance between a and b in Km
const distance = _.flow(
  ([a, b]) => [coord2rad(a), coord2rad(b)],
  ([a, b]) => hav(a.lat - b.lat) + hav(a.lng - b.lng) * cos(a.lat) * cos(b.lat),
  (x) => atan2(sqrt(x, 2), sqrt(1 - x, 2)) * 2 * R
)

const average = (a, b) => ({
  lat: (a.lat + b.lat) / 2,
  lng: (a.lng + b.lng) / 2
})

export default class MarkerAggregator extends Component {
  static defaultProps = {
    distance: 0.5
  }

  state = {}

  static getDerivedStateFromProps({children, distance: diameter}) {
    const groups = []
    const byAddress = (addr) => (group) => distance([addr, group]) <= diameter
    React.Children.forEach(children, ({props: {address}}, i) => {
      const {lat, lng} = address
      const index = groups.findIndex(byAddress(address))
      if (index !== -1) {
        groups[index] = {
          ...average(address, groups[index]),
          children: groups[index].children.concat(i)
        }
      } else groups.push({lat, lng, children: [i]})
    })
    return {groups}
  }

  render() {
    const {groups} = this.state

    return groups.map(
      ({children, ...props}) =>
        children.length === 1 ? (
          this.props.children[children[0]]
        ) : (
          <Marker key={`${children.join(',')}`} {...props}>
            {children.length}
          </Marker>
        )
    )
  }
}
