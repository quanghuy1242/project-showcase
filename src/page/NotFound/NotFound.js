import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';

class NotFound extends Component {
  render() {
    const display = 'block';
    return (
      <div 
        style={{
          height: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text variant="superLarge" style={{display, fontWeight: 400}}>NOT FOUND</Text>
        <Text variant="large" style={{display}}>The link does not exist</Text>
      </div>
    );
  }
}

export default NotFound;