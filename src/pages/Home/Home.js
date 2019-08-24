import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { getStyle } from './Home.style';
import { PrimaryButton, Stack, ImageFit, Image, css } from 'office-ui-fabric-react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MainContent from '../../components/MainContent/MainContent';
import { Banner } from '../../components/Banner/Banner';

class Home extends Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.homeWrapper}>
        <Helmet>
          <title>Home - Project Showcase</title>
        </Helmet>
        <Banner
          image='https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/2019/5/20/photo-1517511620798-cec17d428bc0.jpg'
          height={250}
          primaryText='Project Showcase'
          secondaryText='How my own world begins'
        />
        <MainContent isChild={true}>
          <Stack verticalAlign='center' horizontalAlign='center' style={{ marginTop: '1rem', textAlign: 'center' }}>
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