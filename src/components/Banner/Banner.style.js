import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = ({ image, height }) => {
  return mergeStyleSets({
    bannerWrapper: {
      width: '100%',
      height: height || 250,
      ...(image) && { backgroundImage: `url(${image})` },
      ...(!image) && { backgroundColor: 'rgb(0, 120, 212)' },
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    textWrapper: {
      textAlign: 'center', 
      zIndex: 20
    },
    headerText: {
      color: 'white',
      display: 'block',
      marginBottom: '0.5rem'
    },
    overlay: {
      backgroundColor: 'black',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.2
    }
  })
}