import * as typeAction from '../actions'

const defaultState = {
  text: [],
  numbers: '',
  page: {
    current: 1
  }
}

const textReducers = (state = defaultState, action) => {
  switch (action.type) {
  case typeAction.CLEAR_TEXT:
    return {
      ...state,
      text: [],
      numbers: '',
      page: {
        current: 1
      }
    }
  case typeAction.CONVERT_TEXT_SUCCESS:
    return {
      ...state,
      text: state.text.length > 100
        ? state.text.concat(action.text)
        : action.text
    }
  case typeAction.UPDATE_NUMBERS:
    return {
      ...state,
      numbers: action.numbers
    }
  case typeAction.UPDATE_PAGE:
    return {
      ...state,
      page: {
        ...state.page,
        current: action.page
      }
    }
  default:
    return state;
  }
}

export default textReducers;
