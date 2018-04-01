import React from 'react';
import { connect } from 'react-redux';

import { clearText, fetchConvertation } from '../actions';

import DisplayComponent from '../components/DisplayComponent';
import ButtonsComponent from '../components/ButtonsComponent';

class PhoneContainer extends React.Component {

  render () {
    return (
      <div className='PhoneContainer'>
        <DisplayComponent text={this.props.text} />
        <ButtonsComponent
          convert={this.props.fetchConvertation}
          words={this.props.text}
          clearText={this.props.clearText}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  text: state.text
})

export default connect(mapStateToProps, {
  clearText,
  fetchConvertation
})(PhoneContainer);
