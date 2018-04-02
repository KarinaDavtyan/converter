import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import './App.css';
import PhoneContainer from './containers/PhoneContainer';

class App extends Component {

  handleClose = (event, reason) => {
    if (reason === 'timeout') {
      this.setState({
        open: false
      })
    }
  }

  render () {
    return (
      <div className='App'>
        <PhoneContainer />
        <Snackbar
          open={(new Date()).getTime() <= this.props.noteTime}
          onClose={this.handleClose}
          autoHideDuration={5000}
          SnackbarContentProps={{
            'aria-describedby': 'notificationMessage',
          }}
          message={<span id='this.props.noteMsg'>{this.props.noteMsg}</span>}
          disableWindowBlurListener={false}
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
