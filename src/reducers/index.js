import * as typeAction from '../actions'

const defaultState = {
  text: ''
}

const textReducers = (state = defaultState, action) => {
  switch (action.type) {
  case typeAction.CLEAR_TEXT:
    return {
      ...state,
      text: ''
    }
  case typeAction.CONVERT_TEXT_RECEIVE:
    return {
      ...state,
      text: action.text
    }
  default:
    return state;
  }
}

export default textReducers;
