import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { getStyle } from './NotFound.style';

class NotFound extends Component {
  render() {
    const classNames = getStyle();
    return (
      <div className={classNames.notFoundWrapper}>
        <Text
          variant="superLarge" 
          className={classNames.headerText}
          block
        >
          NOT FOUND
        </Text>
        <Text variant="large" block>The link does not exist</Text>
      </div>
    );
  }
}

export default NotFound;