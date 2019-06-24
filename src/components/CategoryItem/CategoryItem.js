import React, { Component } from 'react';
import { Image, ImageFit } from 'office-ui-fabric-react';
import { getStyle } from './CategoryItem.style';
import { Link } from 'react-router-dom';

class CategoryItem extends Component {
  render() {
    const classNames = getStyle(this.props);
    return (
      <Link className={classNames.itemWrapper} to={`/categories/${this.props.nameId}`}>
        <Image
          src={this.props.image}
          alt={this.props.name}
          width="100%"
          height="100%"
          imageFit={ImageFit.cover}
        />
      </Link>
    );
  }
}

export default CategoryItem;