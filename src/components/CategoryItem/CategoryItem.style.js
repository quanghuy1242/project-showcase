import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = ({ image }) => {
  return mergeStyleSets({
    itemWrapper: {
      height: 150,
      ...(image) && { backgroundImage: `url(${image})` },
      ...(!image) && { backgroundColor: 'violet' },
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      textDecoration: 'none',
      boxSizing: 'border-box',
      selectors: {
        ':hover': {
          border: '2px solid #afa9a5',
        },
        ':hover .overlay': {
          opacity: 0.2,
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
      opacity: '0.3',
      transition: '0.2s'
    }
  })
}