import * as typeAction from '../actions'

const defaultState = {
  text: '',
  numbers: ''
}

const textReducers = (state = defaultState, action) => {
  switch (action.type) {
  case typeAction.CLEAR_TEXT:
    return {
      ...state,
      text: '',
      numbers: ''
    }
  case typeAction.CONVERT_TEXT_SUCCESS:
    return {
      ...state,
      text: action.text
    }
  case typeAction.UPDATE_NUMBERS:
    return {
      ...state,
      numbers: action.numbers
    }
  default:
    return state;
  }
}

export default textReducers;
