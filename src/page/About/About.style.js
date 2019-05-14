import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = ({image}) => {
  return mergeStyleSets({
    onwerImage: {
      width: 150,
      height: 150,
      backgroundColor: 'rgb(0, 120, 212)',
      backgroundImage: `url(${image})`,
      backgroundSize: '100%'
    },
    aboutWrapper: {
      height: 'inherit'
    },
    InfoWrapper: {
      justifyContent: 'center', 
      alignItems: 'center'
    },
    slogan: {
      width: 300, 
      textAlign: 'center'
    },
    pivotWrapper: {
      flexGrow: 1, 
      marginLeft: '1rem'
    },
    pivotItems: {
      margin: '0.5rem',
      height: 'calc(100vh - 349px - 1.5rem)',
      overflow: 'auto'
    }
  })
}