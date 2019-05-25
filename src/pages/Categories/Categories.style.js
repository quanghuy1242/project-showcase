import { mergeStyleSets } from 'office-ui-fabric-react';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    categoryWrapper: {
      animation: MotionAnimations.slideUpIn,
      animationDuration: MotionDurations.duration4
    },
    headerText: {
      marginBottom: '0.5rem'
    }
  })
}