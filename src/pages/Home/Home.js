import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { getStyle } from './Home.style';
import { PrimaryButton, Stack, ImageFit, Image, css } from 'office-ui-fabric-react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MainContent from '../../components/MainContent/MainContent';

class Home extends Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.homeWrapper}>
        <Helmet>
          <title>Home - Project Showcase</title>
        </Helmet>
        <div className={classNames.imageWrapper}>
          <Image
            src="https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/2019/5/20/photo-1517511620798-cec17d428bc0.jpg"
            alt="image"
            height={250}
            imageFit={ImageFit.cover}
            className={classNames.image}
          />
          <Stack className={css("detail")} horizontalAlign="center" verticalAlign="center">
            <Text variant="superLarge" className={classNames.bannerText}>Project Showcase</Text>
            <Text variant="xLarge" className={classNames.bannerText}>How my own world begins</Text>
          </Stack>
        </div>
        <MainContent isChild={true}>
          <Stack verticalAlign='center' horizontalAlign='center' style={{ marginTop: '1rem' }}>
            <Text
              variant="superLarge" 
              className={classNames.headerText}
              block
            >
              COMING SOON
            </Text>
            <Text variant="large" block>Please check back later!</Text>
            <PrimaryButton
              text="Explore projects"
              style={{ marginTop: '0.5rem' }}
              onClick={() => {this.props.history.push('/projects')}}
            />
          </Stack>
        </MainContent>
      </Stack>
    );
  }
}

export default withRouter(Home);