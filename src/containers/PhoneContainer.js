import React from 'react';
import DisplayComponent from '../components/DisplayComponent';
import ControlButtonsComponent from '../components/ControlButtonsComponent';
import NumButtonsComponent from '../components/NumButtonsComponent';

class PhoneContainer extends React.Component {

  render () {
    return (
      <div className='PhoneContainer'>
        <DisplayComponent />
        <ControlButtonsComponent />
        <NumButtonsComponent />
      </div>
    )
  }
}

export default PhoneContainer;
