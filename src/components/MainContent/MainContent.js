import React, { Component } from 'react';
import './MainContent.css';

class MainContent extends Component {
  render() {
    const bannerStyle = {
      ...(this.props.hasPadding) && { padding: '0.5rem' },
      height: this.props.isChild ? '' : 'calc(100vh - 55px)',
      overflow: 'auto'
    }
    return (
      <div className="MainContent" style={bannerStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default MainContent;