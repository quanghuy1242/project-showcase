import React, { Component } from 'react';
import { getStyle } from './Banner.style';
import { css } from '@uifabric/utilities';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { getImageColor } from '../../util/ImageColor';

export class Banner extends Component {
  async componentDidMount() {
    this.props.color || this.setState({ color: await getImageColor(this.props.image) });
  }

  getColorFromStateProp = () => {
    if (this.props.color) { return this.props.color; }
    if (this.state) {
      if (this.state.color) {
        return this.state.color
      }
    }
  }

  render() {
    const classNames = getStyle(this.props);
    const color = this.getColorFromStateProp();
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
          {this.props.children}
        </Stack>
        <div
          className={css(classNames.bannerBorder, 'bannerBorder')}
          style={{
            backgroundColor: color ? `rgb(${color[0]}, ${color[1]}, ${color[2]})` : null
          }}  
        />
      </div>
    );
  }
}