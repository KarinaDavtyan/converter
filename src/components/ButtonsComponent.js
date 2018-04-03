import React from 'react';

class ButtonsComponent extends React.Component {

  state = {
    text: ''
  }

  renderButtons = () => {
    const keyboard = {
      1: '⬅',
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
    if (key === '1') {
      this.setState((prevState) => {
        return {
          text: prevState.text.substr(0, prevState.text.length-1)
        }
      })
    } else if (this.state.text.length <= 10 && key !== '1') {
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
    if (this.props.page.current >= 2) {
      const page = this.props.page.current - 1;
      this.props.convert(this.state.text, page);
    } else {
      this.props.showNotification('Sorry you cannot go back from the 1st page🤷‍')
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      this.state.text.length === 0
        ? this.props.clearText() : this.props.convert(this.state.text, this.props.page.current);
    }
    if (prevProps.words !== this.props.words &&  this.props.words && this.props.words.length === 0) {
      this.setState({
        text: ''
      })
    }
    if (prevProps.finishedPage !== this.props.finishedPage
        && this.props.finishedPage && this.state.text.length !== 0
        && this.props.words.length === 100) {
      const page = this.props.page.current + 1;
      this.props.convert(this.state.text, page);
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
    let prevPage = this.props.page.current - 1;
    let currPage = this.props.page.current;
    return (
      <div className='Buttons'>
        <div className='ControlButtons'>
          <button
            onClick={() => this.handleUndoClick()}
          >
            {currPage > 1 && prevPage}
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
