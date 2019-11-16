import React, { Component } from 'react';
import { getStyle } from './Home.style';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { withRouter, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Banner } from '../../components/Banner/Banner';

class Home extends Component {
  render() {
    const classNames = getStyle();
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    return (
      <Stack className={classNames.homeWrapper} verticalAlign="center">
        <Helmet>
          <title>Home - Project Showcase</title>
        </Helmet>
        <Banner
          image='https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/2019/5/20/photo-1517511620798-cec17d428bc0.jpg'
          height="calc(100vh - 55px - 2.4rem)"
          primaryText='Project Showcase'
          secondaryText='How my own world begins'
        >
          <Stack className={classNames.headerWrapper} tokens={{ childrenGap: 32 }}>
            <div></div>
            <Stack horizontal={!isMobile} tokens={{ childrenGap: 8 }} horizontalAlign="center">
              <Link to="/projects">
                <PrimaryButton
                  text="Explore Projects"
                  iconProps={{ iconName: 'TimelineProgress' }}
                />
              </Link>
              <Link to="/categories">
                <PrimaryButton
                  text="Explore Categories"
                  iconProps={{ iconName: 'Taskboard' }}
                />
              </Link>
            </Stack>
          </Stack>
        </Banner>
      </Stack>
    );
  }
}

export default withRouter(Home);