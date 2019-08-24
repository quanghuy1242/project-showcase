import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    topNav: {
      zIndex: 1000,
      height: 55,
      backgroundColor: 'white',
      boxShadow: Depths.depth8,
      padding: '0 1rem'
    },
    topNavInner: {
      display: 'flex',
      alignItems: 'flex-end',
      flexGrow: 1,
      overflowX: 'auto',
    },
    toggleSideBar: {
      selectors: {
        '& i': {
          fontSize: 20
        }
      }
    },
    topNavAction: {
      display: 'flex',
      marginLeft: '0.5rem',
      flexGrow: 1,
      marginBottom: 1,
      selectors: {
        '& a': {
          marginRight: '0.5rem',
        }
      }
    },
    findMeButtonMenu: {
      selectors: {
        '& .ms-ContextualMenu-icon': {
          color: 'black'
        }
      }
    },
    findMeButton: {
      selectors: {
        '& .ms-Button-icon': {
          color: 'black'
        }
      }
    },
    searchBox: {
      animation: MotionAnimations.slideDownIn,
      animationDuration: MotionDurations.duration3,
      selectors: {
        '& input': {
          width: 20
        }
      }
    },
    overlay: {
      position: 'absolute',
      top: 55,
      bottom: 0,
      right: 0,
      left: 0
    }
  })
}