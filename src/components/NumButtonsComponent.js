import React from 'react';

class NumButtonsComponent extends React.Component {

  renderButtons = () => {
    const keyboard = {
      1: [
        ''
      ],
      2: [
        'a','b','c'
      ],
      3: [
        'd','e','f'
      ],
      4: [
        'g','h','i'
      ],
      5: [
        'j','k','l'
      ],
      6: [
        'm','n','o'
      ],
      7: [
        'p','q','r','s'
      ],
      8: [
        't','u','v'
      ],
      9: [
        'w','x','y','z'
      ]
    }

    const buttons = Object.keys(keyboard).map(key => {
      return (
        <button key={key}>
          <div className='KeyNumber'>
            {key}
          </div>
          <div className='KeyLetters'>
            {keyboard[key]}
          </div>
        </button>
      )
    })
    return buttons;
  }

  render () {
    return (
      <div className='NumButtons'>
        {this.renderButtons()}
      </div>
    )
  }
}

export default NumButtonsComponent;
