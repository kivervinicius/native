export const elevation = (value) => ({
  elevation: value,
  shadowColor: '#666',
  shadowOpacity: 0.6,
  shadowRadius: 4 * value / 5,
  shadowOffset: {
    width: 0,
    height: 2.5 * value / 5
  }
})
