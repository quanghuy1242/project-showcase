import React, { Component } from 'react';
import { style } from './NavLink.style';
import { Link } from 'react-router-dom';

class NavLink extends Component {
  render() {
    return (
      <Link to={this.props.href} className={style.navLink}>
        {this.props.children}
      </Link>
    );
  }
}

export default NavLink;