import React, { Component } from 'react';
import { CategoryAPI } from '../../api/categories.api';
import { getStyle } from './CategoryDetail.style';
import MainContent from '../../components/MainContent/MainContent';
import ProjectCollection from '../../components/ProjectCollection/ProjectCollection';
import { Helmet } from 'react-helmet';
import { Stack } from 'office-ui-fabric-react';
import { Banner } from '../../components/Banner/Banner';
import { getImageColor } from '../../util/ImageColor';

class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {
        projects: []
      },
      seoData: {},
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
      const color = await getImageColor(category.image);
      this.setState({
        category: category,
        seoData: {
          title: `${category.name} - Project Showcase`,
          description: `${category.description}`,
          url: `${this.context.baseUrl}${this.props.match.url}`,
          image: category.image
        },
        color
      });
      this.onToggleLoading();
    } catch (error) {
      this.props.history.push('/404');
    }
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.categoryDetailWrapper}>
        <Helmet>
          <title>{this.state.seoData.title}</title>
          <meta name="keywords" content={this.state.seoData.title} />
          <meta name="description" content={this.state.seoData.description} />
          <meta property="og:title" content={this.state.seoData.title} />
          <meta property="og:url" content={this.state.seoData.url} />
          <meta property="og:image" content={this.state.seoData.image} />
          <meta property="og:image:alt" content={this.state.seoData.description} />
          <meta property="og:description" content={this.state.seoData.description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={this.state.seoData.title} />
          <meta name="twitter:text:title" content={this.state.seoData.title} />
          <meta name="twitter:image" content={this.state.seoData.image} />
          <meta name="twitter:image:alt" content={this.state.seoData.description} />
          <meta name="twitter:description" content={this.state.seoData.description} />
        </Helmet>
        <Banner
          image={this.state.category.image}
          height={250}
          primaryText={this.state.category.name}
          secondaryText={this.state.category.description}
          isBlur={true}
          color={this.state.color}
        />
        <MainContent isChild={true}>
          <ProjectCollection
            title="Projects List"
            projects={this.state.category.projects}
            isLoading={this.state.isLoading}
          />
        </MainContent>
      </Stack>
    );
  }
}

export default CategoryDetail;