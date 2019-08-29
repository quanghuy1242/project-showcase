import { mergeStyleSets } from '@uifabric/styling';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    categoryWrapper: {
      margin: '1rem',
      animation: MotionAnimations.slideUpIn,
      animationDuration: MotionDurations.duration4
    },
    headerText: {
      marginBottom: '0.5rem'
    }
  })
}