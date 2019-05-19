import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { getStyle } from './NotFound.style';
import { css } from '@uifabric/utilities';

class NotFound extends Component {
  render() {
    const classNames = getStyle();
    return (
      <div className={classNames.notFoundWrapper}>
        <Text
          variant="superLarge" 
          className={css(classNames.headerText, classNames.blockText)}
        >
          NOT FOUND
        </Text>
        <Text variant="large" className={classNames.blockText}>The link does not exist</Text>
      </div>
    );
  }
}

export default NotFound;