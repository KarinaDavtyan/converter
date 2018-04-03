import * as typeAction from '../actions'

const defaultState = {
  text: [],
  numbers: '',
  page: 1
}

const textReducers = (state = defaultState, action) => {
  switch (action.type) {
  case typeAction.CLEAR_TEXT:
    return {
      ...state,
      text: [],
      numbers: '',
      page: 1
    }
  case typeAction.UPDATE_TEXT_SUCCESS:
    return {
      ...state,
      text: state.text.length > 100
        ? state.text.concat(action.text)
        : action.text,
      numbers: action.numbers,
      page: action.page
    }
  default:
    return state;
  }
}

export default textReducers;
