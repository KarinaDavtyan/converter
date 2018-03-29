import * as typeAction from '../actions'

const defaultState = {
  text: ''
}

const textReducers = (state = defaultState, action) => {
  switch (action.type) {
  case typeAction.CLEAR_TEXT:
    return state = undefined
  default:
    return state;
  }
}

export default textReducers;
