import React, { Component } from 'react';
import { getStyle } from './StackPanel.style';
import { css } from '@uifabric/utilities';

class StackPanel extends Component {
  render() {
    const classNames = getStyle(this.props);
    return (
      <div 
        className={css(classNames.StackPanelStyle, this.props.className)} 
        style={{...this.props.style}}
      >
        {this.props.children}
      </div>
    );
  }
}

export default StackPanel;