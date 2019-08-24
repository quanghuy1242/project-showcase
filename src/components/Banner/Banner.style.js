import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = ({ isBlur = false }) => {
  return mergeStyleSets({
    image: {
      boxShadow: Depths.depth8,
      borderRadius: 2,
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
    }
  })
}