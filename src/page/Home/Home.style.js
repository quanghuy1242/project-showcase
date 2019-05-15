import { mergeStyleSets } from 'office-ui-fabric-react';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    homeWrapper: {
      animation: MotionAnimations.scaleDownIn,
      animationDuration: MotionDurations.duration3
    }
  })
}