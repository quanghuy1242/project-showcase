import React, { Component } from 'react';
import TopNav from '../TopNav/TopNav';
import NavSide from '../Nav/NavSide';
import './MainApp.css';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    };
  }

  toggleSideBar() {
    this.setState({ isCollapsed: !this.state.isCollapsed })
  }

  render() {
    return (
      <div className="App">
        <TopNav onToggleSideBar={() => this.toggleSideBar()} />
        <div className="AppMain">
          <NavSide isCollapsed={this.state.isCollapsed} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainApp;