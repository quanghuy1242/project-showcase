import { mergeStyleSets } from 'office-ui-fabric-react';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    categoryDetailWrapper: {
      animation: MotionAnimations.slideUpIn,
      animationDuration: MotionDurations.duration4
    }
  })
}