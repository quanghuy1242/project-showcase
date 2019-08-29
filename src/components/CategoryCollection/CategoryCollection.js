import React, { Component } from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import { getStyle } from './CategoryCollection.style';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

class CategorieCollection extends Component {
  render() {
    const classNames = getStyle();
    return (
      <div className={classNames.categoriesWrapper}>
        {this.props.isLoading
          ? <Spinner size={SpinnerSize.large} />
          : <div className={classNames.categoriesListWrapper}>
              {this.props.categoriesList.map((category, index) => (
                <CategoryItem
                  name={category.name}
                  id={category.id}
                  nameId={category.nameId}
                  image={category.image}
                  key={index}
                />
              ))}
            </div>}
      </div>
    );
  }
}

export default CategorieCollection;