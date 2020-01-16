import { ADD_TODO } from './actions/actions'

function formula(state, action) {
  switch(action.type) {
    case SET_FORMULA:
      return action.params ? state :
    default:
      return state
  }
}