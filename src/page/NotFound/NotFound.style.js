import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    notFoundWrapper: {
      height: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      fontWeight: 400,
    },
    blockText: {
      display: 'block'
    }
  })
}