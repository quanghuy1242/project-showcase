import { mergeStyleSets } from 'office-ui-fabric-react';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    notFoundWrapper: {
      height: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      animation: MotionAnimations.scaleDownIn,
      animationDuration: MotionDurations.duration3,
    },
    headerText: {
      fontWeight: 400,
    },
    blockText: {
      display: 'block'
    }
  })
}