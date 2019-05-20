import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getstyle = ({ image }) => {
  const isMobile = window.matchMedia("(max-width: 599px)").matches;
  return mergeStyleSets({
    projectDetailWrapper: {
      height: 'calc(100% - 0.5rem)',
      overflowY: 'auto'
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
      marginRight: isMobile ? '0.5rem' : '2rem'
    },
    pivotWrapper: {
      marginTop: '0.5rem',
      selectors: {
        "& > div > div": {
          overflow: 'hidden'
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
    screenshotWrapper: {
      // height: 'calc(100vh - 164px - 6rem)',
      // overflow: 'auto'
    },
    topDetailProjectId: {
      selectors: {
        '& a': {
          textDecoration: 'none'
        }
      }
    },
    pdw: {
      position: 'relative'
    },
    banner: {
    },
    maincontentw: {
      backgroundColor: 'white',
      margin: '0 100px',
      minHeight: 'calc(100vh - 155px - 0.5rem)',
      width: 'calc(100% - 200px - 1rem)',
      position: 'absolute',
      top: 100,
      boxShadow: Depths.depth16,
      padding: '0.5rem',
      selectors: {
        "@media(max-width: 599px)": {
          width: 'calc(100% - 1rem)',
          margin: 0,
        }
      }
    }
  })
}