import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    onwerImage: {
      width: 150,
      height: 150,
      backgroundColor: 'rgb(0, 120, 212)',
    }
  })
}