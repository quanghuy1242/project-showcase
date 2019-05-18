import React, { Component } from 'react';
import { Text, css } from 'office-ui-fabric-react';
import { getStyle } from './CategoryItem.style';

class CategoryItem extends Component {
  render() {
    const classNames = getStyle();
    return (
      <div className={classNames.itemWrapper}>
        <Text className={classNames.text} variant="xLarge">{this.props.name}</Text>
        <div className={css(classNames.overlay, 'overlay')}></div>
      </div>
    );
  }
}

export default CategoryItem;