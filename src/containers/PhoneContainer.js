import React from 'react';
import { connect } from 'react-redux';

import { clearText, fetchConversion, showNotification } from '../actions';

import DisplayComponent from '../components/DisplayComponent';
import ButtonsComponent from '../components/ButtonsComponent';

class PhoneContainer extends React.Component {

  state = {
    scrollEnd: false
  }

  handleScrollEnd = (scrolled) => {
    this.setState({
      scrollEnd: scrolled
    })
  }

  render () {
    return (
      <div className='PhoneContainer'>
        <DisplayComponent
          text={this.props.text}
          onScrollEnd={this.handleScrollEnd}
        />
        <ButtonsComponent
          words={this.props.text}
          numbers={this.props.numbers}
          page={this.props.page}
          finishedPage={this.state.scrollEnd}
          convert={this.props.fetchConversion}
          clearText={this.props.clearText}
          showNotification={this.props.showNotification}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  text: state.message.text,
  numbers: state.message.numbers,
  page: state.message.page
})

export default connect(mapStateToProps, {
  clearText,
  fetchConversion,
  showNotification
})(PhoneContainer);
