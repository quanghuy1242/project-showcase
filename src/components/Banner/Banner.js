import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import './Banner.css'

class Banner extends Component {
  render() {
    return (
      <div className="banner-wrapper">
        <div style={{ textAlign: 'center' }}>
          <Text variant="superLarge" className="header-text">
            Project Showcase
          </Text>
          <Text variant="xLarge" className="header-text">
            How my own world begin
          </Text>
        </div>
      </div>
    );
  }
}

export default Banner;