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
      border: '2px solid transparent',
      backgroundPosition: 'center center',
      selectors: {
        ':hover .overlay': {
          opacity: 0.4,
          transition: '0.5s'
        },
        ':hover .text': {
          width: '100%',
          transition: '0.4s'
        }
      }
    },
    text: {
      color: '#fff',
      zIndex: 20,
      width: 0,
      display: 'block',
      overflow: 'hidden',
      textAlign: 'center',
      transition: '0.4s'
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