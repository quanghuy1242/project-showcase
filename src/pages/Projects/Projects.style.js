import { mergeStyleSets } from 'office-ui-fabric-react';
import { MotionAnimations, MotionDurations, Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    homeWrapper: {
      margin: '1rem',
      animation: MotionAnimations.slideUpIn,
      animationDuration: MotionDurations.duration4
    },
    image: {
      boxShadow: Depths.depth8,
      borderRadius: 2
    },
    imageWrapper: {
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
    headerText: {
      color: 'white',
      textAlign: 'center'
    }
  })
}