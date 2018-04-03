import * as typeAction from '../actions';
import reducer from '../reducers/message';

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        text: [],
        numbers: '',
        page: 1
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
      page: 1
    })
  })
  it('should handle UPDATE_TEXT_SUCCESS', () => {
    expect(
      reducer(
        {
          text: [],
          numbers: '',
          page: 1
        },
        {
          type: typeAction.UPDATE_TEXT_SUCCESS,
          text: ['a', 'b', 'c'],
          numbers: '2',
          page: 1
        }
      )
    ).toEqual({
      text: ['a', 'b', 'c'],
      numbers: '2',
      page: 1
    })
  })
})
