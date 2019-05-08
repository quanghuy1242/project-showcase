import React, { Component } from 'react';
import TopNav from '../TopNav/TopNav';
import './MainApp.css';

class MainApp extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <div className="AppMain">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainApp;