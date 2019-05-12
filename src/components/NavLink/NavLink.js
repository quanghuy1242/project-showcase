import React, { Component } from 'react';
import { style } from './NavLink.style';

class NavLink extends Component {
  render() {
    return (
      <a href={this.props.href} className={style.navLink}>
        {this.props.children}
      </a>
    );
  }
}

export default NavLink;