import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="col-12 text-center">
        {this.props.message}
      </div>
    );
  }
}
const getProps = state => {
  return {
    message: state.message
  }
}
export default connect(getProps)(App);
