import { mergeStyleSets } from '@uifabric/styling';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    categoryDetailWrapper: {
      margin: '1rem',
      animation: MotionAnimations.slideUpIn,
      animationDuration: MotionDurations.duration4
    }
  })
}