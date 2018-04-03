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
  case typeAction.UPDATE_TEXT_SUCCESS:
    return {
      ...state,
      text: state.text.length > 100
        ? state.text.concat(action.text)
        : action.text,
      numbers: action.numbers,
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
