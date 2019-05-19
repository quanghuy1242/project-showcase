import React, { Component } from 'react';
import { CategoryAPI } from '../../api/categories.api';
import StackPanel from '../../components/StackPanel/StackPanel';
// import { getStyle } from './CategoryDetail.style';
import Banner from '../../components/Banner/Banner';
import MainContent from '../../components/MainContent/MainContent';
import ProjectCollection from '../../components/ProjectCollection/ProjectCollection';

class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {
        projects: []
      },
      isLoading: false
    }
  }

  onToggleLoading() {
    this.setState({ isLoading: !this.state.isLoading });
  }

  async componentDidMount() {
    try {
      this.onToggleLoading();
      const category = await CategoryAPI.getCategory(this.props.match.params.nameId);
      this.setState({ category: category });
      this.onToggleLoading();
    } catch (error) {
      this.props.history.push('/404');
    }
  }

  render() {
    // const classNames = getStyle();
    return (
      <StackPanel>
        <Banner 
          title={this.state.category.name} 
          subTitle={this.state.category.description}
          image={this.state.category.image}
          height={150}
          hasOverlay={true}
        />
        <MainContent hasPadding={true} isChild={true} style={{backgroundColor: '#fcfcfc'}}>
          <ProjectCollection
            title="Projects List"
            projects={this.state.category.projects}
            isLoading={this.state.isLoading}
          />
        </MainContent>
      </StackPanel>
    );
  }
}

export default CategoryDetail;