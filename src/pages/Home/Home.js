import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { getStyle } from './Home.style';
import { PrimaryButton } from 'office-ui-fabric-react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class Home extends Component {
  render() {
    const classNames = getStyle();
    return (
      <div className={classNames.homeWrapper}>
        <Helmet>
          <title>Home - Project Showcase</title>
        </Helmet>
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
      </div>
    );
  }
}

export default withRouter(Home);