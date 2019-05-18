import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    itemWrapper: {
      height: 150,
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      selectors: {
        ':hover .overlay': {
          opacity: 0.1,
          transition: '0.2s'
        }
      }
    },
    text: {
      color: '#fff',
      zIndex: 20
    },
    overlay: {
      position: 'absolute',
      backgroundColor: 'black',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: '0.4',
      transition: '0.2s'
    }
  })
}