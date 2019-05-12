import React, { Component } from 'react';
import { getStyle } from './StackPanel.style';

class StackPanel extends Component {
  render() {
    const classNames = getStyle(this.props);
    return (
      <div className={classNames.StackPanelStyle} style={{...this.props.style}}>
        {this.props.children}
      </div>
    );
  }
}

export default StackPanel;