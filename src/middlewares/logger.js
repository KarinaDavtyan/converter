export default store => next => action => {
  if (action.type) {
    // eslint-disable-next-line no-console
    console.log(`%c ${action.type} `, 'background: #FFDEFF; color: #000071');
    console.log(store.getState().message.page);
    return next(action)
  }
}
