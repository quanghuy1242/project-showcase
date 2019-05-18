import React, { Component } from 'react';
import { Text, css } from 'office-ui-fabric-react';
import { getStyle } from './CategoryItem.style';
import { Link } from 'react-router-dom';

class CategoryItem extends Component {
  render() {
    const classNames = getStyle(this.props);
    return (
      <Link className={classNames.itemWrapper} to={`/categories/${this.props.nameId}`}>
        <Text className={classNames.text} variant="xxLarge">{this.props.name}</Text>
        <div className={css(classNames.overlay, 'overlay')}></div>
      </Link>
    );
  }
}

export default CategoryItem;