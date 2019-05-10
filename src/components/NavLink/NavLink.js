import React, { Component } from 'react';
import './NavLink.css';

class NavLink extends Component {
  render() {
    return (
      <a href={this.props.href} className="NavLink">
        {this.props.children}
      </a>
    );
  }
}

export default NavLink;