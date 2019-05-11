import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { style } from './Banner.style';

class Banner extends Component {
  render() {
    return (
      <div className={style.bannerWrapper}>
        <div style={{ textAlign: 'center' }}>
          <Text variant="superLarge" className={style.headerText}>
            {this.props.title}
          </Text>
          <Text variant="xLarge" className={style.headerText}>
            {this.props.subTitle}
          </Text>
        </div>
      </div>
    );
  }
}

export default Banner;