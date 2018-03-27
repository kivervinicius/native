import _ from 'lodash'

// Get last route in the stack from react-navigation's navigation object
export const last = ({state}) => {
  if (!state.routes) return state
  const result = _.last(state.routes)
  if (!result.routes || !result.routes.length) return result
  return last({state: result})
}
