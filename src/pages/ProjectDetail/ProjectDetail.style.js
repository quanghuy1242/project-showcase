import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';
import { MotionAnimations, MotionDurations, CommunicationColors } from '@uifabric/fluent-theme';

export const getstyle = ({ image }) => {
  return mergeStyleSets({
    projectDetailWrapper: {
      height: 'calc(100vh - 55px)',
      overflowY: 'auto',
      animation: MotionAnimations.slideUpIn,
      animationDuration: MotionDurations.duration4
    },
    outerWrapper: {
      margin: '1rem'
    },
    imagePreview: {
      backgroundColor: CommunicationColors.primary,
      width: 120,
      height: 120,
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover'
    },
    basicInfoWrapper: {
      padding: '0.5rem',
      boxShadow: Depths.depth8
    },
    othersWrapper: {
      padding: '0.5rem',
      boxShadow: Depths.depth8,
      height: 'calc(100vh - 260px)',
      selectors: {
        '& .ms-Pivot': {
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'auto',
          overflowY: 'hidden'
        },
        '& div:nth-child(2)': {
          height: 'calc(100vh - 305px)',
          overflowY: 'auto',
          overflowX: 'hidden'
        }
      }
    },
    pivotItem: {
      padding: '0.5rem',
      animation: MotionAnimations.slideLeftIn,
      animationDuration: MotionDurations.duration4
    },
    screenshot: {
      width: '100%',
    },
    link: {
      textDecoration: 'none'
    }
  })
}