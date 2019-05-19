import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    categoryInfoWrapper: {
      textAlign: 'center',
      selectors: {
        '& span': {
          display: 'block'
        }
      }
    }
  })
}