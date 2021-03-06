import { mergeStyleSets } from '@uifabric/styling';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    homeWrapper: {
      margin: '1rem',
      animation: MotionAnimations.slideUpIn,
      animationDuration: MotionDurations.duration4
    },
    headerText: {
      color: 'white',
      textAlign: 'center'
    }
  })
}