import * as typeAction from '../actions'

const defaultState = {
  notificationTime: null,
  notificationMessage: '',
}

const notification = (state = defaultState, action) => {
  switch (action.type) {
  case typeAction.SHOW_NOTIFICATION:
    return {
      ...state,
      notificationTime: (new Date()).getTime() + 5000,
      notificationMessage: action.msg,
    }
  default:
    return state;
  }
};

export default notification;
