import React, { Component } from 'react';
import MainContent from '../../components/MainContent/MainContent';
import { Text, Stack, Image, css, ImageFit } from 'office-ui-fabric-react';
import StackPanel from '../../components/StackPanel/StackPanel';
import CategorieCollection from '../../components/CategoryCollection/CategoryCollection';
import { getStyle } from './Categories.style';
import { CategoryAPI } from '../../api/categories.api';
import { Helmet } from 'react-helmet';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      seoData: {},
      isLoading: false
    };
  }

  onToggleLoading() {
    this.setState({ isLoading: !this.state.isLoading });
  }

  async componentDidMount() {
    this.onToggleLoading();
    const categories = await CategoryAPI.getCategories();
    this.setState({
      categories: categories,
      seoData: {
        title: "Categories - Project Showcasw",
        description: "Danh mục project được phân chia",
        url: `${this.context.baseUrl}${this.props.match.url}`,
        image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/2019/5/20/photo-1461958508236-9a742665a0d5.jpg'
      }
    });
    this.onToggleLoading();
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.categoryWrapper}>
        <div className={classNames.imageWrapper}>
          <Image
            src={this.state.seoData.image}
            alt="image"
            height={250}
            imageFit={ImageFit.cover}
            className={classNames.image}
          />
          <Stack className={css("detail")} horizontalAlign="center" verticalAlign="center">
            <Text variant="superLarge" className={css(classNames.headerText, classNames.whiteText)}>Categories</Text>
          </Stack>
        </div>
        <MainContent isChild={true}>
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
          <StackPanel>
            <Text variant="xLarge" className={classNames.headerText}>Categories</Text>
            <CategorieCollection 
              categoriesList={this.state.categories}
              isLoading={this.state.isLoading}
            />
          </StackPanel>
        </MainContent>
      </Stack>
    );
  }
}

export default Categories;