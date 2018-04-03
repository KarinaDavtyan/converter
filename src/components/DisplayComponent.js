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

  handleScroll = () => {
    let { scrollHeight, scrollTop, offsetHeight } = this.WordsListNode;
    if (scrollHeight - scrollTop === offsetHeight) {
      this.props.onScrollEnd(true);
      if (this.WordsListNode
        && this.WordsListNode.firstElementChild
      ) this.WordsListNode.firstElementChild.scrollIntoView();
    } else {
      this.props.onScrollEnd(false);
    }
  }

  render () {
    return (
      <div className='DisplayComponent'>
        <div
          className='WordsList'
          id='WordsList'
          ref={(el) => this.WordsListNode = el}
          onScroll={() => this.handleScroll()}
        >
          {this.props.text && this.renderWords()}
        </div>
      </div>
    )
  }
}

export default DisplayComponent;
