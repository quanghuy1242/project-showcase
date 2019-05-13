import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    onwerImage: {
      width: 150,
      height: 150,
      backgroundColor: 'rgb(0, 120, 212)',
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
    }
  })
}