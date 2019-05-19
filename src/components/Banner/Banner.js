import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { getStyle } from './Banner.style';
import { css } from '@uifabric/utilities';

class Banner extends Component {
  render() {
    const classNames = getStyle(this.props);
    return (
      <div className={classNames.bannerWrapper}>
        <div className={classNames.textWrapper}>
          <Text variant="superLarge" className={classNames.headerText}>
            {this.props.title}
          </Text>
          <Text variant="xLarge" className={classNames.headerText}>
            {this.props.subTitle}
          </Text>
          {this.props.children}
        </div>
        {this.props.hasOverlay && <div className={css(classNames.overlay, 'overlay')}></div>}
      </div>
    );
  }
}

export default Banner;