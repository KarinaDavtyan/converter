export const CLEAR_TEXT = 'CLEAR_TEXT';
export const clearText = () => ({
  type: 'CLEAR_TEXT',
})

export const CONVERT_TEXT_REQUEST = 'CONVERT_TEXT_REQUEST';
const requestConvertText = (num) => ({
  type: 'CONVERT_TEXT_REQUEST',
  num
})

export const CONVERT_TEXT_SUCCESS = 'CONVERT_TEXT_SUCCESS';
export const successConvertText = (text) => ({
  type: 'CONVERT_TEXT_SUCCESS',
  text
})

export const UPDATE_NUMBERS = 'UPDATE_NUMBERS';
export const updateNumbers = (numbers) => ({
  type: 'UPDATE_NUMBERS',
  numbers
})

export const fetchConversion = (num) => (dispatch) => {
  dispatch(requestConvertText(num));
  return fetch(`http://localhost:3000/${num}`)
    .then(
      response => response.json(),
      error => dispatch(showNotification('Unprocessable entity🤷‍♀️'))
    )
    .then(text => {
      dispatch(successConvertText(text));
      dispatch(updateNumbers(num))
    })
}

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const showNotification = (msg) => ({
  type: 'SHOW_NOTIFICATION',
  msg
})
