import React from 'react';

class PhoneContainer extends React.Component {

  render () {
    return (
      <div className='PhoneContainer'>
        <div className='DisplayComponent'>
        </div>
        <div className='ControlButtons'>
          <button>
            <span role='img' aria-label='squared ok'>🆗</span>
          </button>
          <button>
            <span role='img' aria-label='fire'>🔥</span>
          </button>
        </div>
        <div className='NumButtons'>
          <div className='FirstRowButtons'>
            <button>
              <div className='KeyNumber'>
                1
              </div>
              <div className='KeyLetters'>
              </div>
            </button>
            <button>
              <div className='KeyNumber'>
                2
              </div>
              <div className='KeyLetters'>
                ABC
              </div>
            </button>
            <button>
              <div className='KeyNumber'>
                3
              </div>
              <div className='KeyLetters'>
                DEF
              </div>
            </button>
          </div>
          <div className='SecondRowButtons'>
            <button>
              <div className='KeyNumber'>
                4
              </div>
              <div className='KeyLetters'>
                GHI
              </div>
            </button>
            <button>
              <div className='KeyNumber'>
                5
              </div>
              <div className='KeyLetters'>
                JKL
              </div>
            </button>
            <button>
              <div className='KeyNumber'>
                6
              </div>
              <div className='KeyLetters'>
                MNO
              </div>
            </button>
          </div>
          <div className='ThirdRowButtons'>
            <button>
              <div className='KeyNumber'>
                7
              </div>
              <div className='KeyLetters'>
                PQRS
              </div>
            </button>
            <button>
              <div className='KeyNumber'>
                8
              </div>
              <div className='KeyLetters'>
                TUV
              </div>
            </button>
            <button>
              <div className='KeyNumber'>
                9
              </div>
              <div className='KeyLetters'>
                WXYZ
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PhoneContainer;
