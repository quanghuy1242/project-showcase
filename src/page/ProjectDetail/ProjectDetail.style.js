import { mergeStyleSets } from 'office-ui-fabric-react';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getstyle = ({ image }) => {
  const isMobile = window.matchMedia("(max-width: 599px)").matches;
  return mergeStyleSets({
    projectDetailWrapper: {
      animation: MotionAnimations.scaleDownIn,
      animationDuration: MotionDurations.duration3
    },
    topDetail: {
      display: 'flex',
      flexDirection: 'row',
    },
    topDetailImage: {
      marginRight: '0.5rem',
      width: 120,
      height: 120,
      minWidth: 120,
      backgroundColor: 'rgb(0, 120, 212)',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover'
    },
    topDetailInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minWidth: 130,
      overflow: 'auto'
    },
    topDetailAction: {
      alignSelf: 'center',
      marginRight: isMobile ? 0 : '2rem'
    },
    pivotWrapper: {
      marginTop: '0.5rem'
    },
    pivotItem: {
      padding: '0.5rem'
    },
    screenshot: {
      width: '100%',
    },
    screenshotWrapper: {
      height: 'calc(100vh - 164px - 6rem)',
      overflow: 'auto'
    },
    topDetailProjectId: {
      selectors: {
        '& a': {
          textDecoration: 'none'
        }
      }
    }
  })
}