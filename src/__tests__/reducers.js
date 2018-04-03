import * as typeAction from '../actions';
import reducer from '../reducers/message';

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        text: [],
        numbers: '',
        page: {
          current: 1
        }
      }
    )
  })
  it('should handle CLEAR_TEXT', () => {
    expect(
      reducer(
        {
          text: ['a', 'b', 'c'],
          numbers: '2'
        },
        {
          type: typeAction.CLEAR_TEXT
        }
      )
    ).toEqual({
      text: [],
      numbers: '',
      page: {
        current: 1
      }
    })
  })
  it('should handle CONVERT_TEXT_SUCCESS', () => {
    expect(
      reducer(
        {
          text: '',
          numbers: ''
        },
        {
          type: typeAction.CONVERT_TEXT_SUCCESS,
          text: ['a', 'b', 'c']
        }
      )
    ).toEqual({
      text: ['a', 'b', 'c'],
      numbers: ''
    })
  })
  it('should handle UPDATE_NUMBERS', () => {
    expect(
      reducer(
        {
          text: ['a', 'b', 'c'],
          numbers: ''
        },
        {
          type: typeAction.UPDATE_NUMBERS,
          numbers: '2'
        }
      )
    ).toEqual({
      text: ['a', 'b', 'c'],
      numbers: '2'
    })
  })
})
