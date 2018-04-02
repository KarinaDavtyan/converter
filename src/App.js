import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import './App.css';
import PhoneContainer from './containers/PhoneContainer';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <PhoneContainer />
        <Snackbar
          open={(new Date()).getTime() <= this.props.noteTime}
          SnackbarContentProps={{
            'aria-describedby': 'notificationMessage',
          }}
          message={<span id='this.props.noteMsg'>I</span>}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  noteTime: state.notification.notificationTime,
  noteMsg: state.notification.notificationMessage
})

export default connect(mapStateToProps, null)(App);
