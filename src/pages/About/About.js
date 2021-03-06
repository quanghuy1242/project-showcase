import React, { Component } from 'react';
import { getStyle } from './About.style';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
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
    const classNames = getStyle();
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    return (
      <Stack className={classNames.aboutWrapper} tokens={{ childrenGap: 15 }}>
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
        <Stack.Item>
          <div className={classNames.imageWrapperParent}>
            <Image
              src={this.context.administrator.coverImage}
              alt="image"
              width="100%"
              height={250}
              imageFit={ImageFit.cover}
              className={classNames.bigImage}
            />
            <div className="child">
              <Stack horizontal={!isMobile} className={classNames.info} tokens={{ childrenGap: isMobile ? 0 : 20 }}>
                <Stack horizontalAlign="center">
                  <Image
                    src={this.context.administrator.image}
                    alt="image"
                    width={isMobile ? 100 : 150}
                    height={isMobile ? 100 : 150}
                    imageFit={ImageFit.cover}
                    className={classNames.image}
                  />
                </Stack>
                <Stack verticalAlign="center">
                  <Text
                    variant={isMobile ? 'xxLarge': 'superLarge'}
                    className={classNames.nameHeader}
                  >
                    {this.context.administrator.name}
                  </Text>
                  <Stack horizontal tokens={{ childrenGap: 10 }} className={classNames.actionButton}>
                    {/* <DefaultButton text="Facebook" /> */}
                  </Stack>
                </Stack>
              </Stack>
            </div>
          </div>
        </Stack.Item>
        <Stack.Item>
          <Text variant="Large" className={classNames.slogan} block>
            {this.context.administrator.slogan}
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Pivot className={classNames.pivotWrapper}>
            <PivotItem headerText="Giới thiệu" className={classNames.pivotItems}>
              {this.context.administrator.introduction}
            </PivotItem>
            <PivotItem headerText="Kỹ năng" className={classNames.pivotItems}>
              {this.context.administrator.skill}
            </PivotItem>
            <PivotItem headerText="Liên hệ" className={classNames.pivotItems}>
              {this.context.administrator.contact}
            </PivotItem>
          </Pivot>
        </Stack.Item>
      </Stack>
    );
  }
}
About.contextType = AppContext;

export default About;