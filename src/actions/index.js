import { checkStatus } from '../helpers';

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

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const updatePage = (page) => ({
  type: 'UPDATE_PAGE',
  page
})

export const UPDATE_TEXT_SUCCESS = 'UPDATE_TEXT_SUCCESS';
export const updateTextSuccess = (text, numbers, page) => ({
  type: 'UPDATE_TEXT_SUCCESS',
  text,
  numbers,
  page
})


export const fetchConversion = (num, page) => (dispatch) => {
  dispatch(requestConvertText(num, page));
  return fetch(`http://localhost:3000/${num}/${page}`)
    .then(checkStatus)
    .then(response => response.json())
    .then(text => {
      if (!text) {
        dispatch(showNotification('Unprocessable entity🤷‍'));
      } else {
        dispatch(updateTextSuccess(text, num, page));
      }
    })
}

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const showNotification = (msg) => ({
  type: 'SHOW_NOTIFICATION',
  msg
})
