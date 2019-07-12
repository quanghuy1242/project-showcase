import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    itemWrapper: {
      height: 150,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      textDecoration: 'none',
      border: '2px solid rgba(0, 0, 0, 0.1)',
      backgroundPosition: 'center center',
      borderRadius: 2,
      transition: '0.2s',
      selectors: {
        ':hover': {
          border: '2px solid rgba(0, 0, 0, 0.4)'
        }
      }
    },
    text: {
      color: '#fff',
      zIndex: 20,
      display: 'block',
      overflow: 'hidden',
      textAlign: 'center',
      transition: '0.7s',
      opacity: 0,
      fontWeight: 400
    },
    overlay: {
      position: 'absolute',
      backgroundColor: 'black',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: '0',
      transition: '0.5s'
    }
  })
}