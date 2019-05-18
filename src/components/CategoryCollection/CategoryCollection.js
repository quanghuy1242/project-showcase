import React, { Component } from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import { getStyle } from './CategoryCollection.style';

class CategorieCollection extends Component {
  render() {
    const classNames = getStyle();
    return (
      <div className={classNames.categoriesListWrapper}>
        {this.props.categoriesList.map((category, index) => (
          <CategoryItem
            name={category.name}
            id={category.id}
            nameId={category.nameId}
            image={category.image}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default CategorieCollection;