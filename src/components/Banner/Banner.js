import React, { Component } from 'react';
import { getStyle } from './Banner.style';
import { css } from '@uifabric/utilities';
import { Image, ImageFit, Stack, Text } from 'office-ui-fabric-react';

export class Banner extends Component {
  render() {
    const classNames = getStyle(this.props);
    return (
      <div className={classNames.imageWrapper}>
        <Image
          src={this.props.image}
          alt="image"
          height={this.props.height}
          imageFit={ImageFit.cover}
          className={classNames.image}
        />
        <Stack className={css("detail")} horizontalAlign="center" verticalAlign="center">
          <Text variant="superLarge" className={classNames.bannerText}>{this.props.primaryText}</Text>
          {!this.props.secondaryText || <Text variant="xLarge" className={classNames.bannerText}>{this.props.secondaryText}</Text>}
        </Stack>
      </div>
    );
  }
}