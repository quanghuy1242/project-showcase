import React, { Component } from 'react';
import { 
  DefaultButton,
} from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import './Banner.css'

class Banner extends Component {
  render() {
    return (
      <div className="banner-wrapper">
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Text variant="superLarge" className="header-text">
              Project Showcase
            </Text>
          </div>
          <DefaultButton text="Explore" />
        </div>
      </div>
    );
  }
}

export default Banner;