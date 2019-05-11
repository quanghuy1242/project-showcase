import React, { Component } from 'react';
import { style } from './StackPanel.style';

class StackPanel extends Component {
  render() {
    return (
      <div className={style.StackPanelStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default StackPanel;