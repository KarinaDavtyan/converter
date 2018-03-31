import React from 'react';

class DisplayComponent extends React.Component {

  renderWords = () => {
    const words = this.props.text.map(word => {
      return (
        <div className='Word' key={word}>
          {word}
        </div>
      )
    })
    return words;
  }
  render () {
    return (
      <div className='DisplayComponent'>
        <div className='WordsList'>
          {this.props.text && this.renderWords()}
        </div>
      </div>
    )
  }
}

export default DisplayComponent;
