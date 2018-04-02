import { combineReducers } from 'redux';

import message from './message';
import notification from './notification';

const appReducers = combineReducers({
  message,
  notification
})

export default appReducers;
