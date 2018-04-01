import React from 'react';

class ButtonsComponent extends React.Component {

  state = {
    text: ''
  }

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
        <button
          key={key}
          onClick={() => this.handleClick(key)}
        >
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

  handleClick = (key) => {
    if (this.state.text.length <= 10) {
      this.setState((prevState) => {
        return {
          text: prevState.text + key
        }
      })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.text !== this.state.text && this.state.text.length !== 0) {
      this.props.convert(this.state.text);
    }
    if (prevProps.words !== this.props.words && this.props.words.length === 0) {
      this.setState({
        text: ''
      })
    }
  }

  render () {
    return (
      <div className='Buttons'>
        <div className='ControlButtons'>
          <button>
            <span role='img' aria-label='squared ok'>🆗</span>
          </button>
          <button
            onClick={() => this.props.clearText()}
          >
            <span role='img' aria-label='fire'>🔥</span>
          </button>
        </div>
        <div className='NumButtons'>
          {this.renderButtons()}
        </div>
      </div>
    )
  }
}

export default ButtonsComponent;
