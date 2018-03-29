import { createStore, applyMiddleware, compose } from 'redux';
import throttle from 'lodash/throttle';

import logger from './middlewares/logger';
import thunk from './middlewares/thunk';
import reducer from './reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const persistedState = loadState();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000));

  return store;
}

export default configureStore;
