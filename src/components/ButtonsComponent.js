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
          onClick={() => this.handleKeyClick(key)}
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

  handleKeyClick = (key) => {
    if (this.state.text.length <= 10) {
      this.setState((prevState) => {
        return {
          text: prevState.text + key
        }
      })
    }
  }

  handleDeleteClick = () => {
    this.setState({
      text: ''
    })
  }

  handleUndoClick = () => {
    this.setState((prevState) => {
      return {
        text: prevState.text.substr(0, prevState.text.length-1)
      }
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      this.state.text.length === 0
        ? this.props.clearText() : this.props.convert(this.state.text);
    }
    if (prevProps.words !== this.props.words && this.props.words.length === 0) {
      this.setState({
        text: ''
      })
    }
  }

  componentDidMount () {
    if (this.props.words && this.props.words.length > 0 && this.state.text.length === 0) {
      this.setState({
        text: this.props.numbers
      })
    }
  }

  render () {
    return (
      <div className='Buttons'>
        <div className='ControlButtons'>
          <button
            onClick={() => this.handleUndoClick()}
          >
            <span role='img' aria-label='back with leftwards arrow above'>🔙</span>
          </button>
          <button
            onClick={() => this.handleDeleteClick()}
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
