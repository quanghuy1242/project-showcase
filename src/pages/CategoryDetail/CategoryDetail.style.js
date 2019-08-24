import { mergeStyleSets } from 'office-ui-fabric-react';
import { MotionAnimations, MotionDurations, Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    categoryDetailWrapper: {
      margin: '1rem',
      animation: MotionAnimations.slideUpIn,
      animationDuration: MotionDurations.duration4
    }
  })
}