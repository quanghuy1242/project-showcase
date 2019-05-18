import React, { Component } from 'react';
import MainContent from '../../components/MainContent/MainContent';
import { Text } from 'office-ui-fabric-react';
import StackPanel from '../../components/StackPanel/StackPanel';
import CategorieCollection from '../../components/CategoryCollection/CategoryCollection';
import { getStyle } from './Categories.style';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Á' },
        { id: 2, name: 'B' },
        { id: 3, name: 'Đ' },
      ]
    };
  }
  render() {
    const classNames = getStyle();
    return (
      <MainContent hasPadding={true} isChild={true}>
        <StackPanel>
          <Text variant="xxLarge" className={classNames.headerText}>Categories</Text>
          <CategorieCollection categoriesList={this.state.categories} />
        </StackPanel>
      </MainContent>
    );
  }
}

export default Categories;