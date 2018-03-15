function merge($styles, styles) {
  if (styles) {
    Object.keys($styles).forEach((key) => {
      if (key in styles) $styles[key] = $styles[key].concat(styles[key])
    })
  }
  return $styles
}

export default ($styles) => (Target) => {
  const displayName = Target.displayName || Target.name
  const Component = ({styles, ...props}) => (
    <Target styles={merge($styles(props), styles)} {...props} />
  )
  Component.displayName = `withStyleSheet(${displayName})`
  return Component
}
