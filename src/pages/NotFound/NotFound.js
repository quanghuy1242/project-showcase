import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { getStyle } from './NotFound.style';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { withRouter } from 'react-router-dom';

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
        <PrimaryButton
          text="Homepage"
          style={{ marginTop: '0.5rem' }}
          onClick={() => {this.props.history.push('/')}}
        />
      </div>
    );
  }
}

export default withRouter(NotFound);