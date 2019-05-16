import { mergeStyleSets } from 'office-ui-fabric-react'

export const getStyle = ({ isCollapsed, isOverlay }) => {
  const customDepth = 'rgba(0, 0, 0, 0.22) 0px 50px 55px 0px, rgba(0, 0, 0, 0.18) 0px 15px 15px 0px';

  return mergeStyleSets({
    navWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: 'calc(100vh - 55px)',
      transition: '0.2s',
      backgroundColor: 'white',
      zIndex: 100,
      width: isCollapsed ? 0 : 250,
      position: isOverlay ? 'absolute' : 'initial',
      boxShadow: isOverlay ? customDepth : 'none',
      border: '1px solid #eee',
    },
    searchBoxWrapper: {
      width: '100%',
      display: isCollapsed ? 'none' : 'initial'
    }
  })
}