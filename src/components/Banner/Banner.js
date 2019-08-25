import React, { Component } from 'react';
import { getStyle } from './Banner.style';
import { css } from '@uifabric/utilities';
import { Image, ImageFit, Stack, Text } from 'office-ui-fabric-react';
import { getImageColor } from '../../util/ImageColor';

export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [0, 0, 0]
    };
  }

  async componentDidMount() {
    this.props.color || this.setState({ color: await getImageColor(this.props.image) });
  }

  render() {
    const classNames = getStyle(this.props);
    const color = this.props.color || this.state.color;
    return (
      <div className={css(classNames.imageWrapper, 'imageWrapper')}>
        <Image
          src={this.props.image}
          alt="image"
          height={this.props.height}
          imageFit={ImageFit.cover}
          className={classNames.image}
          crossOrigin='anonymous'
        />
        <Stack className={css("detail")} horizontalAlign="center" verticalAlign="center">
          <Text variant="superLarge" className={classNames.bannerText}>{this.props.primaryText}</Text>
          {!this.props.secondaryText || <Text variant="xLarge" className={classNames.bannerText}>{this.props.secondaryText}</Text>}
        </Stack>
        <div
          className={css(classNames.bannerBorder, 'bannerBorder')}
          style={{
            backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
          }}  
        />
      </div>
    );
  }
}