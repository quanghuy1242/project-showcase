import { mergeStyleSets } from '@uifabric/styling';
import { MotionAnimations, MotionDurations, CommunicationColors, Depths } from '@uifabric/fluent-theme';

export const getstyle = ({ image }) => {
  const isMobile = window.matchMedia("(max-width: 599px)").matches;
  // const isMobile2 = window.matchMedia("(max-width: 1115px)").matches;
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
      width: isMobile ? 100: 200,
      height: isMobile ? 100: 200,
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      border: '4px solid white',
      borderRadius: 2,
      backgroundPosition: 'center'
    },
    basicInfoWrapper: {
      padding: isMobile ? '0.5rem' : '1rem',
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))'
    },
    othersWrapper: {
      ...isMobile && { width: 'calc(100vw - 2rem)' },
      selectors: {
        '& .ms-FocusZone': {
          position: 'sticky',
          top: 0,
          backgroundColor: 'white'
        },
        '& .ms-Pivot': {
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'auto',
          overflowY: 'hidden',
          borderBottom: '1px solid rgb(218, 218, 218)',
          borderTop: '1px solid rgb(218, 218, 218)',
          position: 'sticky'
        },
        '& div:nth-child(2)': {
          // minHeight: 'calc(100vh - 305px)',
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
      boxShadow: Depths.depth4
    },
    link: {
      textDecoration: 'none'
    },
    bigImage: {
      boxShadow: Depths.depth8,
      borderRadius: 2
    },
    topWrapper: {
      position: 'relative'
    },
    whiteText: {
      color: 'white'
    },
    buttonTech: {
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
    },
    date: {
      color: 'lightgray'
    },
    basicDes: {
      textAlign: 'center'
    }
  })
}