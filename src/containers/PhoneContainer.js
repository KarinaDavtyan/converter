import React from 'react';
import { connect } from 'react-redux';

import { clearText, fetchConvertation } from '../actions';

import DisplayComponent from '../components/DisplayComponent';
import ControlButtonsComponent from '../components/ControlButtonsComponent';
import NumButtonsComponent from '../components/NumButtonsComponent';

class PhoneContainer extends React.Component {

  render () {
    return (
      <div className='PhoneContainer'>
        <DisplayComponent text={this.props.text} />
        <ControlButtonsComponent clearText={this.props.clearText} />
        <NumButtonsComponent
          convert={this.props.fetchConvertation}
          words={this.props.text}
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
