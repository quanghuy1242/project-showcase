import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import StackPanel from '../../components/StackPanel/StackPanel';
import MainContent from '../../components/MainContent/MainContent';
import { getStyle } from './About.style';
import { Text, Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react';
import { AppContext } from '../../context/AppContext';
import { Helmet } from 'react-helmet';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHorizontal: true,
      isMounted: false,
      seoData: {}
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
    window.addEventListener('resize', this.handleScreenResize.bind(this), false);
    this.setState({
      seoData: {
        title: "About - Project Showcasw",
        description: "Thông tin website",
        url: `${this.context.baseUrl}${this.props.match.url}`,
        image: this.context.administrator.image
      }
    });
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
    window.removeEventListener('resize', this.handleScreenResize.bind(this), false);
  }

  handleScreenResize() {
    if (this.state.isMounted) {
      this.setState({
        isHorizontal: !window.matchMedia("(max-width: 599px)").matches
      });
    }
  }

  render() {
    const classNames = getStyle({image: this.context.administrator.image});
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    return (
      <StackPanel className={classNames.aboutWrapper}>
        <Helmet>
          <title>{this.state.seoData.title}</title>
          <meta name="keywords" content={this.state.seoData.title} />
          <meta name="description" content={this.state.seoData.description} />
          <meta property="og:title" content={this.state.seoData.title} />
          <meta property="og:url" content={this.state.seoData.url} />
          <meta property="og:image" content={this.state.image} />
          <meta property="og:image:alt" content={this.state.seoData.description} />
          <meta property="og:description" content={this.state.seoData.description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={this.state.seoData.title} />
          <meta name="twitter:text:title" content={this.state.seoData.title} />
          <meta name="twitter:image" content={this.state.image} />
          <meta name="twitter:image:alt" content={this.state.seoData.description} />
          <meta name="twitter:description" content={this.state.seoData.description} />
        </Helmet>
        <Banner title="About" subTitle="Who am I?" height={150} />
        <MainContent hasPadding={true} isChild={true} className={classNames.aboutWrapperInner}>
          <StackPanel isHorizontal={!isMobile} style={{height: '100%'}}>
            <StackPanel className={classNames.InfoWrapper}>
              <div className={classNames.onwerImage}></div>
              <Text variant="xxLarge">{this.context.administrator.name}</Text>
              <Text variant="Large" className={classNames.slogan}>
                {this.context.administrator.slogan}
              </Text>
            </StackPanel>
            <StackPanel className={classNames.pivotWrapper}>
              <Pivot linkSize={PivotLinkSize.large}>
                <PivotItem headerText="Giới thiệu" className={classNames.pivotItems}>
                  {this.context.administrator.introduction}
                </PivotItem>
                <PivotItem headerText="Kỹ năng" className={classNames.pivotItems}>
                  {this.context.administrator.skill}
                </PivotItem>
                <PivotItem headerText="Thông tin liên hệ" className={classNames.pivotItems}>
                  {this.context.administrator.contact}
                </PivotItem>
              </Pivot>
            </StackPanel>
          </StackPanel>
        </MainContent>
      </StackPanel>
    );
  }
}
About.contextType = AppContext;

export default About;