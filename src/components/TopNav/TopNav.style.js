import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    topNav: {
      display: 'flex',
      padding: '0rem 1rem 0rem 1rem',
      zIndex: 99999999,
      height: 55,
      alignItems: 'center',
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
      overflowX: 'auto',
      selectors: {
        '& a': {
          marginRight: '0.5rem',
        }
      }
    }
  })
}