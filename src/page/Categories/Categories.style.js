import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    headerText: {
      marginBottom: '0.5rem'
    }
  })
}