import { mergeStyleSets } from '@uifabric/styling'

export const getStyle = ({ isCollapsed, isOverlay }) => {
  const customDepth = 'rgba(0, 0, 0, 0.22) 0px 50px 55px 0px, rgba(0, 0, 0, 0.18) 0px 15px 15px 0px';

  return mergeStyleSets({
    navWrapper: {
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 57px)',
      transition: '0.2s',
      backgroundColor: 'white',
      zIndex: 100,
      width: isCollapsed ? 0 : 250,
      position: isOverlay ? 'absolute' : 'initial',
      boxShadow: isOverlay ? customDepth : 'none',
      border: isCollapsed ? 'none' : '1px solid #eee',
      overflowY: 'auto',
      selectors: {
        '& .ms-FocusZone': {
          flexGrow: 1
        }
      }
    },
    searchBoxWrapper: {
      width: '100%',
      display: isCollapsed ? 'none' : 'initial'
    },
    navOverlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#eee',
      opacity: 0.3,
      zIndex: 97
    },
    credit: {
      width: '100%',
      height: 40,
      marginBottom: '1rem'
    }
  })
}