import React from 'react';
import { connect } from 'react-redux';

import { clearText, fetchConversion } from '../actions';

import DisplayComponent from '../components/DisplayComponent';
import ButtonsComponent from '../components/ButtonsComponent';

class PhoneContainer extends React.Component {

  render () {
    return (
      <div className='PhoneContainer'>
        <DisplayComponent text={this.props.text} />
        <ButtonsComponent
          words={this.props.text}
          numbers={this.props.numbers}
          convert={this.props.fetchConversion}
          clearText={this.props.clearText}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  text: state.message.text,
  numbers: state.message.numbers
})

export default connect(mapStateToProps, {
  clearText,
  fetchConversion
})(PhoneContainer);
