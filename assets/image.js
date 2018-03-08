import _ from 'lodash'
import {CDN_URL} from '@/lib/config'

export const withRatio = (dimensions) => (options) => {
  const style = _.defaults({}, options, {position: 'relative'}, dimensions)
  const {width, height, resizeMode} = options
  if (width && height) style.resizeMode = resizeMode || 'cover'
  else if (height) style.width = dimensions.width * height / dimensions.height
  else if (width) style.height = dimensions.height * width / dimensions.width
  return style
}

export const url = (filename, options = {}) => {
  let display = ['f_auto', 'c_fit']
  if (options.height) display.push(`h_${options.height}`)
  if (options.width) display.push(`w_${options.width}`)
  return `${CDN_URL}/${display.join(',')}/v1513818385/${filename}`
}
