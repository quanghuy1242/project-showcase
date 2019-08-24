import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';
import ColorThief from 'colorthief';

let color = [0, 0, 0];

const getImageColor = image => {
  const colorThief = new ColorThief();

  const imgData = new Image();
  imgData.crossOrigin = 'Anonymous';
  imgData.src = image;

  if (image) {
    imgData.onload = function() {
      color = colorThief.getColor(imgData);
      document.querySelector('.bannerBorder').style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }
  }
}

export const getStyle = ({ isBlur = false, image }) => {
  getImageColor(image);
  return mergeStyleSets({
    image: {
      boxShadow: Depths.depth8,
      borderRadius: '2px 2px 0px 0px',
      ...(!isBlur || { filter: 'saturate(180%) blur(15px)' })
    },
    imageWrapper: {
      overflow: 'hidden',
      position: 'relative',
      marginBottom: '0.5rem',
      selectors: {
        '& .detail': {
          position: 'absolute',
          left: 0,
          bottom: 0,
          top: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '1rem'
        }
      }
    },
    bannerText: {
      color: 'white',
      textAlign: 'center',
    },
    bannerBorder: {
      height: 5,
      // backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    }
  })
}