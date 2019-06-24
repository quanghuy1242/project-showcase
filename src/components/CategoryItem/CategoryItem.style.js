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
      border: '3px solid transparent',
      backgroundPosition: 'center center',
      // boxSizing: 'border-box',
      borderRadius: 2,
      selectors: {
        // ':hover .overlay': {
        //   opacity: 0.4,
        //   transition: '0.5s'
        // },
        // ':hover .text': {
        //   transition: '0.7s',
        //   opacity: 1
        // },
        ':hover': {
          border: '3px solid rgba(0, 0, 0, 0.2)'
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