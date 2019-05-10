import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import './Banner.css'

class Banner extends Component {
  render() {
  	const headerText = {
			color: 'white',
		  display: 'block',
		  marginBottom: '0.5rem'
  	};
    return (
      <div className="banner-wrapper">
        <div style={{ textAlign: 'center' }}>
          <Text variant="superLarge" style={headerText}>
            Project Showcase
          </Text>
          <Text variant="xLarge" style={headerText}>
            How my own world begin
          </Text>
        </div>
      </div>
    );
  }
}

export default Banner;