import { mergeStyleSets } from 'office-ui-fabric-react';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getStyle = ({image}) => {
  return mergeStyleSets({
    onwerImage: {
      width: 150,
      height: 150,
      backgroundColor: 'rgb(0, 120, 212)',
      backgroundImage: `url(${image})`,
      backgroundSize: '100%'
    },
    aboutWrapper: {
      height: 'inherit',
    },
    aboutWrapperInner: {
      overflow: 'initial !important'
    },
    InfoWrapper: {
      justifyContent: 'center', 
      alignItems: 'center'
    },
    slogan: {
      width: 300, 
      textAlign: 'center'
    },
    pivotWrapper: {
      flexGrow: 1, 
      marginLeft: '1rem',
      selectors: {
        "& > div > div": {
          overflow: 'hidden'
        }
      }
    },
    pivotItems: {
      margin: '0.5rem',
      height: 'calc(100vh - 349px - 2rem)',
      overflow: 'auto',
      animation: MotionAnimations.slideLeftIn,
      animationDuration: MotionDurations.duration4
    }
  })
}