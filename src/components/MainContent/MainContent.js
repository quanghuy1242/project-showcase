import React, { Component } from 'react';

class MainContent extends Component {
  render() {
    const bannerStyle = {
      ...(this.props.hasPadding) && { padding: '0.5rem' },
      height: this.props.isChild ? '' : 'calc(100vh - 55px)',
      overflow: 'auto',
      flexGrow: 1,
      ...this.props.style
    }
    return (
      <div style={bannerStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default MainContent;