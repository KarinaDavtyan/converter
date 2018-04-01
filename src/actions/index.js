export const CLEAR_TEXT = 'CLEAR_TEXT';
export const clearText = () => ({
  type: 'CLEAR_TEXT',
})

const requestConvertText = (num) => ({
  type: 'CONVERT_TEXT_REQUEST',
  num
})

export const CONVERT_TEXT_RECEIVE = 'CONVERT_TEXT_RECEIVE';
export const receiveConvertText = (text) => ({
  type: 'CONVERT_TEXT_RECEIVE',
  text
})

export const UPDATE_NUMBERS = 'UPDATE_NUMBERS';
export const updateNumbers = (numbers) => ({
  type: 'UPDATE_NUMBERS',
  numbers
})

export const fetchConvertation = (num) => (dispatch) => {
  dispatch(requestConvertText(num));
  return fetch(`http://localhost:3000/${num}`)
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
    .then(text => {
      dispatch(receiveConvertText(text));
      dispatch(updateNumbers(num))
    })
}
