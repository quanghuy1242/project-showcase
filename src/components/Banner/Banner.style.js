import { mergeStyleSets } from '@uifabric/styling';
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = ({ isBlur = false, image }) => {
  return mergeStyleSets({
    image: {
      boxShadow: Depths.depth8,
      borderRadius: '2px 2px 0px 0px',
      ...(!isBlur || { filter: 'saturate(180%) blur(15px)' })
    },
    imageWrapper: {
      overflow: 'hidden',
      position: 'relative',
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