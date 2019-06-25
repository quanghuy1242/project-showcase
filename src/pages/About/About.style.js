import { mergeStyleSets } from 'office-ui-fabric-react';
import { MotionAnimations, MotionDurations, Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    aboutWrapper: {
      // height: 'inherit',
      animation: MotionAnimations.slideUpIn,
      animationDuration: MotionDurations.duration4,
      padding: '1rem'
    },
    pivotWrapper: {
      selectors: {
        '& .ms-Pivot': {
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'auto',
          overflowY: 'hidden',
          borderBottom: '1px solid rgb(218, 218, 218)',
          borderTop: '1px solid rgb(218, 218, 218)'
        },
        '& div:nth-child(2)': {
          overflowY: 'auto',
          overflowX: 'hidden'
        }
      }
    },
    pivotItems: {
      margin: '0.5rem',
      overflow: 'auto',
      animation: MotionAnimations.slideLeftIn,
      animationDuration: MotionDurations.duration4
    },
    // Redemption besomorph coopex
    bigImage: {
      boxShadow: Depths.depth8,
      borderRadius: 2
    },
    image: {
      border: '5px solid #fff',
      borderRadius: 2,
      boxShadow: Depths.depth8,
    },
    imageWrapperParent: {
      position: 'relative',
      selectors: {
        '& .child': {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))'
        }
      }
    },
    info: {
      padding: '0.5rem'
    },
    slogan: {
      textAlign: 'center'
    },
    nameHeader: {
      color: 'white',
      textAlign: 'center'
    },
    actionButton: {
      selectors: {
        '& button': {
          backgroundColor: 'transparent', 
          color: 'lightgray',
          marginTop: '0.5rem !important',
          transition: '0.3s',
          selectors: {
            ':hover': {
              backgroundColor: 'rgba(243, 242, 241, 0.2)',
              color: '#fff'
            }
          }
        }
      }
    }
  })
}